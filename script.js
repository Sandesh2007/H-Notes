document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
  
    prev.addEventListener('click', function () {
      slider.scrollBy({
        left: -slider.clientWidth,
        behavior: 'smooth'
      });
    });
  
    next.addEventListener('click', function () {
      slider.scrollBy({
        left: slider.clientWidth,
        behavior: 'smooth'
      });
    });
  });
  