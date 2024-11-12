window.addEventListener('load',initEvents);

function initEvents(){
    const sdButton = document.querySelectorAll('.js-link').forEach((link)=>{
        link.addEventListener('click',activator);
    })
}

function activator() {
    const prev = document.querySelector('a[class~="active"]');
    prev.classList.remove('active');

    this.classList.add('active');
}
function scrollCards(direction) {
    const container = document.querySelector('.card-container');
    const scrollAmount = 220; // Amount to scroll per click (adjust as needed)
    container.scrollBy({
        left: direction * scrollAmount,
        behavior: 'smooth'
    });
}