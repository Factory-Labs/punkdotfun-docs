// Mobile menu toggle
function toggleMenu() {
    var b = document.querySelector('.nav-body');
    if (b) b.classList.toggle('open');
}

// Highlight the current page in the sidebar
(function () {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function (a) {
        var href = a.getAttribute('href');
        if (href === path || (path === '' && href === 'index.html')) {
            a.classList.add('active');
        }
    });
})();
