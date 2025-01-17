document.addEventListener("DOMContentLoaded", () => {
    const progressText = document.getElementById("progress-text");
    let progress = 0;

    // Simulation de chargement
    const interval = setInterval(() => {
        progress += 1;
        progressText.textContent = `${progress}%`;

        if (progress >= 100) {
            clearInterval(interval);
            const loader = document.getElementById("loader");
            setTimeout(() => {
                loader.style.opacity = "0";
                loader.style.visibility = "hidden";
            }, 500); // Masque le loader après 0,5 seconde
        }
    }, 30);
});