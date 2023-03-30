function updateDetailPage(itemData) {
    const logo = document.querySelector('.logo');
    const title = document.querySelector('.app-infos h1');

    logo.src = itemData.logo;
    logo.alt = `${itemData.nom} logo`;
    title.textContent = itemData.nom;

    // Mettez à jour d'autres éléments de la page avec les données de l'élément, si nécessaire
}

function initDetailPage() {
    const selectedItem = JSON.parse(sessionStorage.getItem('selectedItem'));
    if (selectedItem) {
        updateDetailPage(selectedItem);
    } else {
        // Gérer le cas où aucune donnée d'élément n'est disponible, par exemple en redirigeant vers index.html
    }
}

initDetailPage();
