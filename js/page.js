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
  
    // Set the initial position of the paper element below the viewport
    paper.style.bottom = bottomPosition + '1px';
  
    // Trigger reflow to apply initial styles
    paper.offsetHeight;
  
    // Restore the transition property to enable smooth animation
    paper.style.transition = 'bottom 1s ease-in-out';
  
    // Set the final position of the paper element just above the recipe box
    paper.style.bottom = bottomPosition + 'px';
  });
  
  
  
  

    
  