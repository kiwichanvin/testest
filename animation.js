const presentation = document.querySelector('.presentation');
const allProjects = document.querySelector('.All');
const move = document.querySelector('.move');

function handleIntersection(entries) {
  if (entries[0].isIntersecting) {
    presentation.classList.add('show');

    setTimeout(() => {
      // Afficher les deux <p> en fondu
      allProjects.style.transition = 'opacity 1s';
      allProjects.style.opacity = 1;
      move.style.transition = 'opacity 1s';
      move.style.opacity = 1;
    }, 200);
  }
}

const observer = new IntersectionObserver(handleIntersection, { rootMargin: '-50px' });
observer.observe(presentation);
