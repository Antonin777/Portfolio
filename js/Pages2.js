document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll(".AnimateText_charsWrapper__AeFZT div");

    // Ajoute une animation progressive
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.transform = "translateY(0)";
            letter.style.opacity = "1";
        }, index * 100); // Délai entre chaque lettre (100ms)
    });
});
