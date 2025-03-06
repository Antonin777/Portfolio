document.addEventListener('DOMContentLoaded', () => {
    // Vérifier si les éléments existent avant d'ajouter des événements
    const buttons = document.querySelectorAll('.btn-lire');
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('close');

    if (!popup || !overlay || !closeButton || buttons.length === 0) {
        console.error("Un ou plusieurs éléments sont introuvables dans le DOM.");
        return; // Arrêter l'exécution si un élément est manquant
    }

    // Afficher la popup lorsqu'on clique sur un bouton "Lire"
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            popup.style.display = 'block';
            overlay.style.display = 'block';
        });
    });

    // Fermer la popup en cliquant sur le bouton "Fermer"
    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });

    // Fermer la popup en cliquant sur l'overlay
    overlay.addEventListener('click', () => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
    });
});
