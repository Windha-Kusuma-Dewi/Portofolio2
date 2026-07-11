document.addEventListener("DOMContentLoaded", () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Semua elemen yang ingin dianimasikan
    const animatedElements = [
        ".section-title",
        ".info-card",
        ".experience-section",
        ".education-section",
        ".timeline-item"
    ];

    // Ambil semua elemen (termasuk yang jumlahnya banyak seperti timeline)
    const elements = document.querySelectorAll(animatedElements.join(","));

    elements.forEach((el, index) => {
        if (prefersReducedMotion) {
            el.style.opacity = "1";
            return;
        }

        // kondisi awal
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";

        // animasi muncul perlahan (stagger)
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 150 + index * 150);
    });
});