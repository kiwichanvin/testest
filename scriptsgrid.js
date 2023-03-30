const itemsData = [
    {
        "nom": "UrbanXplor",
        "logo": "Assets/mebl.png",
        "little-description":"App mobile qui crée des itinéraires personnalisés pour découvrir les coins cachés de sa ville.",
        "date": "Janvier 2022",
        "photos": [
            {
                "nom": "Page d'accueil",
                "source": "Assets/Mockups/test.png"
            },
            {
                "nom": "Itinéraire",
                "source": "Assets/Mockups/test.png"
            },
            {
                "nom": "Profil utilisateur",
                "source": "Assets/Mockups/test.png"
            },
            {
                "nom": "Découverte",
                "source": "Assets/Mockups/test.png"
            }
        ],
        "description": "Application mobile qui génère des itinéraires insolites et personnalisés en fonction de thèmes surprenants (lieux hantés, les monuments étranges ou les scènes de films célèbres), permettant aux utilisateurs de découvrir des aspects cachés et inattendus de leur ville. Le but est d'encourager les gens à explorer et à s'amuser tout en découvrant de nouveaux lieux et en partageant leurs expériences avec d'autres.",
        "features": [
        {
            "text": "Database",
            "image": "Assets/Icons/Database.png"
        },
        {
            "text": "Database",
            "image": "Assets/Icons/Database.png"
        },
        {
            "text": "Database",
            "image": "Assets/Icons/Database.png"
        },
        {
            "text": "Database",
            "image": "Assets/Icons/Database.png"
        },
        {
            "text": "Database",
            "image": "Assets/Icons/Database.png"
        },
        {
            "text": "Database",
            "image": "Assets/Icons/Database.png"
        },
        {
            "text": "UX / UI Design",
            "image": "Assets/Icons/Database.png"
        }
    ]
    },
];

function handleGridItemClick(itemData, event) {
    event.preventDefault();
    sessionStorage.setItem('selectedItem', JSON.stringify(itemData));
    animatePageTransition(itemData.logo);
  }
  


  function createGridItem(itemData) {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    gridItem.addEventListener('click', (event) => handleGridItemClick(itemData, event)); // Ajoutez l'événement ici

    const logo = document.createElement('img');
    logo.src = itemData.logo;
    logo.alt = `${itemData.nom} logo`;

    const name = document.createElement('h2');
    name.textContent = itemData.nom;

    const description = document.createElement('p');
    description.textContent = itemData['little-description'];

    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add('content-wrapper');
    contentWrapper.appendChild(name);
    contentWrapper.appendChild(description);

    gridItem.appendChild(logo);
    gridItem.appendChild(contentWrapper);

    return gridItem;
}

function initGrid() {
    const grid = document.querySelector('.grid');

    itemsData.forEach(itemData => {
        const gridItem = createGridItem(itemData);
        grid.appendChild(gridItem);
    });
}

function createFeatureListItem(feature) {
    const li = document.createElement('li');
    const icon = document.createElement('span');
    icon.classList.add('icon');
    icon.innerHTML = `<img src="${feature.image}" alt="${feature.text} icon">`;
    const text = document.createElement('span');
    text.classList.add('mot');
    text.textContent = feature.text;

    li.appendChild(icon);
    li.appendChild(text);

    return li;
}

function createMockupItem(photo) {
    const mockupItem = document.createElement('div');
    mockupItem.classList.add('mockup-item');

    const img = document.createElement('img');
    img.src = photo.source;
    img.alt = photo.nom;

    const pagenameContainer = document.createElement('div');
    pagenameContainer.classList.add('pagename-container');

    const p = document.createElement('p');
    p.textContent = photo.nom;

    pagenameContainer.appendChild(p);
    mockupItem.appendChild(img);
    mockupItem.appendChild(pagenameContainer);

    return mockupItem;
}


function initDetailPage() {
    const selectedItem = JSON.parse(sessionStorage.getItem('selectedItem'));

    if (!selectedItem) {
        return;
    }

    document.querySelector('.appinfo .header .logo').src = selectedItem.logo;
    document.querySelector('.appinfo .app-infos h1').textContent = selectedItem.nom;
    document.querySelector('.appinfo .description').textContent = selectedItem.description;
    document.querySelector('.appinfo .app-infos h2').textContent = selectedItem.date;


    const featuresList = document.querySelector('.appinfo .app-infos .liste-horizontale');
    featuresList.innerHTML = '';

    selectedItem.features.forEach(feature => {
        const listItem = createFeatureListItem(feature);
        featuresList.appendChild(listItem);
    });
}

if (document.querySelector('.appinfo')) {
    initDetailPage();
}

function initMockupsGrid() {
    const grid = document.querySelector('.mockups-grid');
    grid.innerHTML = '';

    itemsData[0].photos.forEach(photo => {
        const mockupItem = createMockupItem(photo);
        grid.appendChild(mockupItem);
    });
}

if (document.querySelector('.mockups-grid')) {
    initMockupsGrid();
}


initGrid();

