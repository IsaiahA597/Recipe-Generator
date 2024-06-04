// recipegenerator.js
document.getElementById("generate-recipe").addEventListener("click", async function() {
    const url = "https://api.spoonacular.com/recipes/random"
    const output = document.getElementById("recipe-output");
    const paper = document.createElement('div');
    paper.className = 'paper';

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Failed to fetch recipe");

        const data = await response.json();
        const recipe = data.recipes[0];
        
        paper.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}" style="width:100%; max-width:300px;"/>
            <p><strong>Cook Time:</strong> ${recipe.readyInMinutes} minutes</p>
            <p><strong>Servings:</strong> ${recipe.servings}</p>
            <h3>Ingredients:</h3>
            <ul>${recipe.extendedIngredients.map(ingredient => `<li>${ingredient.original}</li>`).join('')}</ul>
            <h3>Instructions:</h3>
            <p>${recipe.instructions}</p>
        `;
        
        output.innerHTML = '';
        output.appendChild(paper);

        // Trigger the animation
        output.style.visibility = 'visible';
        paper.classList.add('visible');
    } catch (error) {
        output.innerHTML = `<p style="color:red;">${error.message}</p>`;
    }
});

// trying another api - here's all the code for it (shoutout to GPT for helping a significant amount) -brooke
function fetchRandomRecipe() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            console.log(data); // Log the data for debugging
            const recipe = data.meals[0];
            const container = document.getElementById('recipe-container');
            container.innerHTML = ''; // Clear the loading text

            const recipeHtml = `
                <div class="recipe">
                    <h2>${recipe.strMeal}</h2>
                    <img src="${recipe.strMealThumb}" alt="${recipe.strMeal}">
                    <p><strong>Category:</strong> ${recipe.strCategory}</p>
                    <p><strong>Area:</strong> ${recipe.strArea}</p>
                    <p><strong>Instructions:</strong> ${recipe.strInstructions}</p>
                    <h3>Ingredients:</h3>
                    <ul>
                        ${getIngredientsList(recipe).join('')}
                    </ul>
                </div>
            `;
            container.innerHTML = recipeHtml;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('recipe-container').textContent = 'An error occurred while fetching the recipe.';
        });
}

function getIngredientsList(recipe) {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        const ingredient = recipe[`strIngredient${i}`];
        const measure = recipe[`strMeasure${i}`];
        if (ingredient) {
            ingredients.push(`<li>${measure} ${ingredient}</li>`);
        }
    }
    return ingredients;
}

document.getElementById('fetch-recipe-button').addEventListener('click', fetchRandomRecipe);
// API code endpoint 