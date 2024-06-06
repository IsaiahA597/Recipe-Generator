// recipegenerator.js

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