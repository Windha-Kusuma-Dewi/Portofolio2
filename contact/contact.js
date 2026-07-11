document.addEventListener('DOMContentLoaded', function () {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rootStyle = getComputedStyle(document.documentElement);
    const borderColor = rootStyle.getPropertyValue('--border').trim();
    const accentColor = rootStyle.getPropertyValue('--accent').trim();
    const accentSoft = rootStyle.getPropertyValue('--accent-soft').trim();
    const errorColor = '#ef4444';

    const animatedElements = [
        '.section-title',
        '.section-subtitle',
        '.contact-info',
        '.contact-item',
        '.contact-form'
    ];

    const elements = document.querySelectorAll(animatedElements.join(','));

    elements.forEach((el, index) => {
        if (prefersReducedMotion) {
            el.style.opacity = '1';
            return;
        }

        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 150 + index * 130);
    });


    const contactForm = document.querySelector('.contact-form');
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    const formBtn = document.querySelector('.form-btn');

    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        let isValid = true;

        formInputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = errorColor;
            } else {
                input.style.borderColor = borderColor;
            }
        });

        if (!isValid) {
            alert('Harap isi semua field!');
            return;
        }

        formBtn.textContent = 'Mengirim...';
        formBtn.disabled = true;

        const formData = new FormData(contactForm);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                alert("Pesan berhasil dikirim!");
                contactForm.reset();

                formInputs.forEach(input => {
                    input.style.borderColor = borderColor;
                });
            } else {
                alert("Gagal mengirim pesan. Silakan coba lagi.");
            }

        } catch (error) {
            alert("Terjadi kesalahan, periksa koneksi internet Anda.");
        }

        formBtn.textContent = 'Kirim Pesan';
        formBtn.disabled = false;
    });


    formInputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.style.borderColor = accentColor;
            this.style.boxShadow = `0 0 0 3px ${accentSoft}`;
        });

        input.addEventListener('blur', function () {
            this.style.boxShadow = 'none';
            if (!this.value.trim()) {
                this.style.borderColor = borderColor;
            }
        });
    });
});