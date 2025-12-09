// Contact page JavaScript (FULL VERSION with Web3Forms Integration)

document.addEventListener('DOMContentLoaded', function () {
    console.log('Contact page loaded');

    const contactForm = document.querySelector('.contact-form');
    const formInputs = document.querySelectorAll('.form-input, .form-textarea');
    const formBtn = document.querySelector('.form-btn');

    // 🔥 Submit ke Web3Forms API
    contactForm.addEventListener('submit', async function (e) {
        e.preventDefault();

        let isValid = true;

        // Validasi input
        formInputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = '#ef4444';
            } else {
                input.style.borderColor = 'rgba(250, 204, 21, 0.2)';
            }
        });

        if (!isValid) {
            alert('Harap isi semua field!');
            return;
        }

        // Loading state
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

                // Reset border
                formInputs.forEach(input => {
                    input.style.borderColor = 'rgba(250, 204, 21, 0.2)';
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

    // Efek fokus input
    formInputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.style.borderColor = '#facc15';
            this.style.boxShadow = '0 0 0 3px rgba(250, 204, 21, 0.1)';
        });

        input.addEventListener('blur', function () {
            this.style.boxShadow = 'none';
            if (!this.value.trim()) {
                this.style.borderColor = 'rgba(250, 204, 21, 0.2)';
            }
        });
    });
});
