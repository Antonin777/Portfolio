document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-lire');
    const popups = document.querySelectorAll('.popup');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const popupId = button.getAttribute('data-popup');
            const popup = document.getElementById(popupId);
            if (popup) {
                popup.style.display = 'block';
            }
        });
    });

    // Fermer la popup
    popups.forEach(popup => {
        const closeButton = popup.querySelector('.close');
        closeButton.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    });
});
