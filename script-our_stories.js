let items = document.querySelectorAll('.timeline-item');
function revealTimelineItems() {

    let windowHeight = window.innerHeight;
    
    items.forEach(item => {
        let position = item.getBoundingClientRect().top;
        if (position < windowHeight - 100) {
            item.classList.add('visible');
        }
    });
}

// Run on scroll
window.addEventListener('scroll', revealTimelineItems);

// Initial check in case some elements are already visible
revealTimelineItems();