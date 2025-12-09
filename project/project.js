// Project page specific JavaScript
document.addEventListener('DOMContentLoaded', function () {
    console.log('Project page loaded');

    const projectCards = document.querySelectorAll('.project-card');

    // Settings animasi
    const baseDelay = 120;        // jeda antar-card
    const fadeDuration = 700;     // kehalusan fade
    const slideDistance = 25;     // geser awal

    projectCards.forEach((card, index) => {
        // Set kondisi awal (sebelum animasi)
        card.style.opacity = '0';
        card.style.transform = `translateY(${slideDistance}px)`;
        card.style.transition = `
            opacity ${fadeDuration}ms ease-out,
            transform ${fadeDuration}ms cubic-bezier(0.25, 0.46, 0.45, 1)
        `;

        // Delay animasi untuk tiap card
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + index * baseDelay);
    });
});
