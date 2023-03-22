
let progressBars = document.querySelectorAll('.progress-bar');

progressBars.forEach(function(progressBar) {
  let progress = 0;
  let timer = setInterval(function() {
    if (progress < parseInt(progressBar.getAttribute('aria-valuenow'))) {
      progress++;
      progressBar.style.width = progress + '%';
      progressBar.innerText = progress + '%';
    } else {
      clearInterval(timer);
    }
  }, 20); // aumentar la velocidad de la animación en milisegundos
});
