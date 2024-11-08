
window.addEventListener('scroll', function() {
    let content = document.querySelector('.content');
    let scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
        content.style.color = '#ecf0f1'; // Change text color after scrolling down
    } else {
        content.style.color = '#fff'; // Default text color
    }
});
