document.getElementById("Recipes").addEventListener("click", function() {
    document.getElementById("output").style.display = "block";
  });

  document.getElementById("About").addEventListener("click", function() {
    document.getElementById("output1").style.display = "block";
  });

  document.getElementById("Resources").addEventListener("click", function() {
    document.getElementById("output2").style.display = "block";
  });

  // Slide-In Animation for the paper, will try to optimize so it appears coming out of the box, but I think we'd need to break that image into layers for it to work.
  document.getElementById('recipe-generator').addEventListener('click', function() {
    const paper = document.querySelector('.paper');
    const recipeBox = document.getElementById('recipe-box');
  
    // Calculate the desired bottom position for the paper element
    const bottomPosition = recipeBox.offsetTop + recipeBox.offsetHeight - paper.offsetHeight - 305;
  
    // Set the transition property to none to prevent initial animation
    paper.style.transition = 'none';

    // Make the paper element visible and fully opaque
    paper.style.visibility = 'visible';
    paper.style.opacity = '1';
  
    // Set the initial position of the paper element below the viewport
    paper.style.bottom = bottomPosition + '1px';
  
    // Trigger reflow to apply initial styles
    paper.offsetHeight;
  
    // Restore the transition property to enable smooth animation
    paper.style.transition = 'bottom 1s ease-in-out';
  
    // Set the final position of the paper element just above the recipe box
    paper.style.bottom = bottomPosition + 'px';
  });
  
  // Array of all recipe URLS
  const urls = [
    'https://www.recipetineats.com/pesto-pasta-salad/',
    'https://pescetarian.kitchen/udon-noodle-soup/',
    'https://pescetarian.kitchen/thai-vegetable-massaman-curry/',
    'https://pescetarian.kitchen/sauteed-garlic-calamari/',
    // Add more URLs as needed
  ];
  // Gets a random URL from the above array, so when the user clicks on the paper it'll redirect them to one of these
  function getRandomUrl() {
    const randomIndex = Math.floor(Math.random() * urls.length);
    return urls[randomIndex];
  }
// Event listener for the paper
document.getElementById('paper').addEventListener('click', function() {
  const randomUrl = getRandomUrl();
  window.open(randomUrl, '_blank'); // Open the random URL in a new tab
});
    
  