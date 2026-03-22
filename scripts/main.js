document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const searchBtn = document.getElementById('searchBtn');
    const searchBar = document.getElementById('searchBar');
    
    // Navbar glassmorphism on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Search bar toggle
    searchBtn.addEventListener('click', function() {
        searchBar.classList.toggle('active');
    });
    
    // Close search bar when clicking outside
    document.addEventListener('click', function(event) {
        if (!searchBar.contains(event.target) && !searchBtn.contains(event.target)) {
            searchBar.classList.remove('active');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 70;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});