// recipegenerator.js
document.getElementById("generate-recipe").addEventListener("click", async function() {
    const apiKey = ""; // Replace with your actual API key 0c405a12e3d740bab14502c49162eabd
    const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`;
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
