document.getElementById("Recipes").addEventListener("click", function() {
    document.getElementById("output").style.display = "block";
  });

  document.getElementById("About").addEventListener("click", function() {
    document.getElementById("output1").style.display = "block";
  });

  document.getElementById('Recipe').addEventListener('click', function() {
    const paper = document.querySelector('.paper');
    
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    
    paper.style.transition = 'none';
    paper.style.bottom ='-100%';
    paper.offsetHeight;
    paper.style.transition = '';
    
    paper.style.backgroundColor = randomColor;
    paper.style.bottom = '10px';
    
    });
    
  