document.addEventListener('DOMContentLoaded', function () {
    const circles = document.querySelectorAll('.circle');
    const infoBoxes = document.querySelectorAll('.info-box');
    const progressBars = document.querySelectorAll('.progress-bar');
  
    circles.forEach((circle, index) => {
      circle.addEventListener('click', function () {
        // Ativar o círculo clicado e atualizar as barras de progresso
        circles.forEach((c, i) => {
          if (i <= index) {
            c.classList.add('green');
          } else {
            c.classList.remove('green');
          }
        });
  
        progressBars.forEach((bar, i) => {
          if (i <= index - 1) {
            bar.style.backgroundColor = '#4CAF50';
          } else {
            bar.style.backgroundColor = 'white';
          }
        });
  
        // Mostrar a caixa de informações correspondente
        infoBoxes.forEach((box, i) => {
          if (i === index) {
            box.style.display = 'block';
          } else {
            box.style.display = 'none';
          }
        });
      });
    });
  });
  