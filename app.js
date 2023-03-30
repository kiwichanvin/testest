window.addEventListener('load', function() {
  const words = [
  "MarketPlace",
  "Réseaux sociaux",
  "Jeux mobiles",
  "Fitness et santé",
  "Voyage",
  "Productivité",
  "Photographie",
  "Rencontres",
  "Bancaires",
  "Musique",
  "Cuisine et recettes"
  ];
  const marketPlace = document.querySelector('.move');
  const blink = document.createElement('span');
  blink.textContent = '_';
  blink.classList.add('blink');
  marketPlace.appendChild(blink);
  let wordIndex = 0;
  let charIndex = 0;
  let interval;
  
  function writeText() {
    marketPlace.textContent = words[wordIndex].substring(0, charIndex) + '_';
    charIndex++;
    if (charIndex > words[wordIndex].length) {
      setTimeout(function() {
        wordIndex++;
        if (wordIndex === words.length) {
          wordIndex = 0;
        }
        charIndex = 0;
      }, 500); // ajouter une pause de 100ms avant de passer au mot suivant
    }
  }
  
  
  function startInterval() {
  interval = setInterval(writeText, 150);
  }
  
  startInterval();
  
  setInterval(function() {
  blink.classList.toggle('hide');
  }, 500);
  });

