// Dark mode persistence using localStorage
// Apply saved theme immediately on <html> to prevent flash
(function() {
    if (localStorage.getItem('theme') === 'light') {
        document.documentElement.classList.add('light');
    }
})();

// Highlight active nav link based on current page
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('.nav-list a');
    var path = window.location.pathname;
    links.forEach(function(link) {
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        }
    });
});

function toggleTheme() {
    document.documentElement.classList.toggle('light');
    if (document.documentElement.classList.contains('light')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
}
