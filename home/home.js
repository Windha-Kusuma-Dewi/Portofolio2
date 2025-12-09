// Home page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Home page loaded');
    
    // Add any home page specific functionality here
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        // Animation for hero title
        heroTitle.style.opacity = '0';
        heroTitle.style.transform = 'translateY(20px)';
        heroTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 300);
    }
});