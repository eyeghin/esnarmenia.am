function toggleNav() {
    const navPanel = document.getElementById('nav-panel');
    navPanel.classList.toggle('show');
}
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu-placeholder').innerHTML = data;

            // Highlight the current page
            const currentPage = window.location.pathname.split('/').pop();
            document.querySelectorAll('.menu a').forEach(link => {
                if (link.getAttribute('href') === currentPage) {
                    link.classList.add('active');
                }
            });
        })
        .catch(err => console.error('Error loading menu:', err));
    document.addEventListener("DOMContentLoaded", () => {
        const currentPage = window.location.pathname.split('/').pop();
        document.querySelectorAll('nav ul li a').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    });
