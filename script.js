// Toggle Sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    sidebar.classList.toggle('closed');
    overlay.classList.toggle('active');
}

// Auto-open sidebar on desktop
if (window.innerWidth >= 1024) {
    document.getElementById('sidebar')?.classList.remove('closed');
}

// Handle window resize
window.addEventListener('resize', () => {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    if (window.innerWidth >= 1024) {
        sidebar?.classList.remove('closed');
        overlay?.classList.remove('active');
    } else {
        sidebar?.classList.add('closed');
    }
});

// Close sidebar when clicking on overlay
document.addEventListener('DOMContentLoaded', function() {
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', toggleSidebar);
    }
});