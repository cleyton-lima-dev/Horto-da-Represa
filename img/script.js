const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

let index = 0;

nextBtn.addEventListener('click', () => {
  index++;
  if (index > 2) index = 0;
  track.style.transform = `translateX(-${index * 100}%)`;
});

prevBtn.addEventListener('click', () => {
  index--;
  if (index < 0) index = 2;
  track.style.transform = `translateX(-${index * 100}%)`;
});