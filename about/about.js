// About page specific JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('About page loaded');
    
    // Add animation to timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.3}s, transform 0.6s ease ${index * 0.3}s`;
        
        setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, 300 + (index * 300));
    });
    
    // CV download button animation
    const cvBtn = document.querySelector('.cv-btn');
    if (cvBtn) {
        cvBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        cvBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    }
});