const shadowOne = document.querySelector('.shadow.one');
const sections = document.querySelectorAll('.section');
const links = document.querySelectorAll('.content__links-item');

function shadowHover() {
  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      shadowOne.classList.toggle('active');
    })
    section.addEventListener('mouseleave', () => {
      shadowOne.classList.toggle('active');
    })
  })
}

function replaceBg(id) {
  const bg = document.getElementById(id);
  sections.forEach(section => {
    section.style.display = 'none';
  })
  bg.style.display = 'block';
}

function changeBg() {
  links.forEach(link => {
    link.addEventListener('mouseenter', e => {
      e.preventDefault();
      replaceBg(e.target.dataset.link);
      
    })
  })

  sections.forEach(section => {
    section.style.display = 'none';
    sections[0].style.display = 'block';
  })
}

shadowHover();
changeBg();