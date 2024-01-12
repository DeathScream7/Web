
if (document.title === 'plus'){
    console.log("yes");
}



// Récupérer le contexte 2D du canvas
var canvas = document.getElementById('monCanvas');
var contexte = canvas.getContext('2d');

// Définir la taille du canvas sur la taille de la fenêtre
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var dessin = false;

// Gestionnaire d'événement pour le début du dessin
canvas.addEventListener('mousedown', function(e) {
    dessin = true;
    contexte.beginPath();
    contexte.moveTo(e.clientX-10, e.clientY-80);
});

canvas.addEventListener('touchstart', function(e) {
    dessin = true;
    contexte.beginPath();
    contexte.moveTo(e.clientX-10, e.clientY-80);
});

// Gestionnaire d'événement pour la fin du dessin
canvas.addEventListener('mouseup', function() {
    dessin = false;
    contexte.closePath();
});
canvas.addEventListener('touchend', function() {
    dessin = false;
    contexte.closePath();
});


// Gestionnaire d'événement pour le mouvement de la souris
canvas.addEventListener('mousemove', function(e) {
    if (!dessin) return;

    contexte.lineTo(e.clientX-10, e.clientY-80);
    contexte.stroke();
});

// Gestionnaire d'événement pour le redimensionnement de la fenêtre
window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

