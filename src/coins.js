document.getElementById('mainButton').addEventListener('click', function() {
    // Création d'un nouvel objet (élément div)
    let nouvelObjet = document.createElement('div');
    nouvelObjet.setAttribute('id', 'littleCoin'); // Ajout d'un attribut ID
    nouvelObjet.setAttribute('class', 'littleCoin'); // Ajout d'un attribut ID
    // Génération de positions aléatoires
    let positionTop = Math.floor(Math.random() * window.innerHeight / 1); // Position verticale aléatoire
    let positionLeft = Math.floor(Math.random() * window.innerWidth /2 ); // Position horizontale aléatoire

// Application des positions aléatoires à l'élément
    nouvelObjet.style.top = positionTop + 'px';
    nouvelObjet.style.left = window.innerWidth/2.6 - positionLeft + 'px';

    // Ajout de l'objet au conteneur
    let conteneur = document.getElementById('coinDiv');
    conteneur.appendChild(nouvelObjet);

    // Suppression de l'objet après 2 secondes
    setTimeout(function() {
        nouvelObjet.remove();
    }, 800);
});


let element = document.querySelectorAll('littleCoin');
element.forEach(function(element) {
    element.style.top = element.style.top + 100
    console.log("hello", element.style.top)
});
