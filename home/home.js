document.addEventListener("DOMContentLoaded", () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const elements = [
        ".badge-row",
        ".hero-title",
        ".hero-subtitle",
        ".hero-description",
        ".tech-stack",
        ".btn-group",
        ".hero-visual"
    ];

    elements.forEach((selector, index) => {
        const el = document.querySelector(selector);
        if (!el) return;

        if (prefersReducedMotion) {
            el.style.opacity = "1";
            return;
        }

        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";

        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 300 + index * 150);
    });

    const typedEl = document.getElementById("typed-role");
    if (!typedEl) return;

    const roles = [
        "Frontend Developer",
        "UI/UX Enthusiast",
    ];

    if (prefersReducedMotion) {
        typedEl.textContent = roles[0];
        return;
    }

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeLoop() {
        const currentRole = roles[roleIndex];

        if (!deleting) {
            charIndex++;
            typedEl.textContent = currentRole.slice(0, charIndex);

            if (charIndex === currentRole.length) {
                deleting = true;
                setTimeout(typeLoop, 1600);
                return;
            }
        } else {
            charIndex--;
            typedEl.textContent = currentRole.slice(0, charIndex);

            if (charIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(typeLoop, deleting ? 35 : 70);
    }

    setTimeout(typeLoop, 1200);
});