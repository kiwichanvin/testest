function animatePageTransition(logoSrc) {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
  
    const background = document.createElement('div');
    background.classList.add('background');
  
    const logoContainer = document.createElement('div');
    logoContainer.classList.add('logo-container');
  
    const logo = document.createElement('img');
    logo.src = logoSrc;
    logo.classList.add('logo');
    logoContainer.appendChild(logo);
  
    overlay.appendChild(background);
    overlay.appendChild(logoContainer);
    document.body.appendChild(overlay);
  
    // Animate the overlay
    const duration = 1000; // Transition duration in milliseconds
  
    overlay.addEventListener('animationend', (event) => {
      if (event.animationName === 'pulse') {
        window.location.href = 'Detail.html';
      }
    });
  
    setTimeout(() => {
      overlay.style.animationPlayState = 'running';
    }, 0);
  }
