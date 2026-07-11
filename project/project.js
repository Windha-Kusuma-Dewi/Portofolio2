// Project page specific JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Settings animasi
    const baseDelay = 100;        // jeda antar-card
    const fadeDuration = 600;     // kehalusan fade
    const slideDistance = 20;     // geser awal

    projectCards.forEach((card, index) => {
        if (prefersReducedMotion) {
            card.style.opacity = '1';
            return;
        }

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
        }, 200 + index * baseDelay);
    });
});