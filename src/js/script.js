

let informationBox = document.getElementById("informationBox");

// Sélection de l'élément avec l'ID "communistBand"
let communistBand = document.getElementById("goatsDiv");

// Ajout d'un gestionnaire d'événement pour le survol (mouseover)
communistBand.addEventListener("mouseover", function() {
    informationBox.style.display = "block"; // Affiche la fenêtre contextuelle
    informationBox.innerHTML = "Ceci est le BOSS"; // Ajoute le contenu de l'information
});

// Ajout d'un gestionnaire d'événement pour lorsque le curseur quitte la div (mouseout)
communistBand.addEventListener("mouseout", function() {
    informationBox.style.display = "none"; // Masque la fenêtre contextuelle lorsque le curseur quitte la div
});




// Sélection de l'élément avec l'ID "communistBand"
let travailleursDiv = document.getElementById("travailleursDiv");

// Ajout d'un gestionnaire d'événement pour le survol (mouseover)
travailleursDiv.addEventListener("mouseover", function() {
    informationBox.style.display = "block"; // Affiche la fenêtre contextuelle
    informationBox.innerHTML = "Ceci est un travailleur"; // Ajoute le contenu de l'information
});

// Ajout d'un gestionnaire d'événement pour lorsque le curseur quitte la div (mouseout)
travailleursDiv.addEventListener("mouseout", function() {
    informationBox.style.display = "none"; // Masque la fenêtre contextuelle lorsque le curseur quitte la div
});




// Sélection de l'élément avec l'ID "communistBand"
let escalvesDiv = document.getElementById("escalvesDiv");

// Ajout d'un gestionnaire d'événement pour le survol (mouseover)
escalvesDiv.addEventListener("mouseover", function() {
    informationBox.style.display = "block"; // Affiche la fenêtre contextuelle
    informationBox.innerHTML = "Ceci est un esclave"; // Ajoute le contenu de l'information
});

// Ajout d'un gestionnaire d'événement pour lorsque le curseur quitte la div (mouseout)
escalvesDiv.addEventListener("mouseout", function() {
    informationBox.style.display = "none"; // Masque la fenêtre contextuelle lorsque le curseur quitte la div
});






