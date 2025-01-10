// MENU
function toggleMenu() {
    const navMobile = document.querySelector('.nav-mobile');
    const mobileOverlay = document.querySelector('.mobile-overlay');
    
    if(navMobile.classList.contains('active')) {
        navMobile.classList.remove('active');
        mobileOverlay.classList.remove('active');
    } else {
        navMobile.classList.add('active');
        mobileOverlay.classList.add('active');
    }

}

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

document.addEventListener("DOMContentLoaded", () => {
    const videoPlaceholder = document.querySelector(".intro_videoPlaceholder__Ooimu");

    // Crée un élément vidéo
    const video = document.createElement("video");
    video.src = "./Asset/Vidéo/vidéo-background.mp4"; // Chemin de la vidéo
    video.autoplay = true;
    video.loop = true;
    video.muted = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";

    // Ajoute la vidéo au conteneur
    videoPlaceholder.appendChild(video);
});

document.addEventListener("mousemove", (event) => {
    const letters = document.querySelectorAll(".AnimateText_charsWrapper__AeFZT div");
    letters.forEach((letter) => {
        const rect = letter.getBoundingClientRect();
        const distX = event.clientX - (rect.left + rect.width / 2);
        const distY = event.clientY - (rect.top + rect.height / 2);
        const dist = Math.sqrt(distX * distX + distY * distY);

        // Applique une légère transformation en fonction de la distance
        const maxDist = 200; // Distance maximale pour l'effet
        const scale = Math.max(1 - dist / maxDist, 0.8); // Réduction de l'échelle
        letter.style.transform = `translate(0, ${Math.min(dist / 10, 10)}px) scale(${scale})`;
    });
});

const video = document.querySelector('.intro_videoPlaceholder__Ooimu video');

if (video) {

    document.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX /
            window.innerWidth;
        const mouseY = event.clientY /
            window.innerHeight;


        const translateX = (mouseX - 0.5) * 20;
        const translateY = (mouseY - 0.5) * 20;


        const blur = mouseY * 10;
        const brightness = 1 + mouseX * 0.5;


        video.style.transform = `translate(${translateX}px, ${translateY}px) blur(${blur}px) brightness(${brightness})`;
        video.style.filter = `blur(${blur}px) brightness(${brightness})`;

    });
} else {
    console.error('no video');
}