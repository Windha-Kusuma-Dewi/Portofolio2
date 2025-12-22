document.addEventListener("DOMContentLoaded", () => {
    console.log("Home page loaded");

    const elements = [
        ".badge",
        ".hero-title",
        ".hero-subtitle",
        ".hero-description",
        ".btn-group"
    ];

    elements.forEach((selector, index) => {
        const el = document.querySelector(selector);
        if (!el) return;

        // initial state
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";

        // stagger animation
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 300 + index * 200);
    });
});
