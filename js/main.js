document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth',
            duration: 5000
        });
    });
});

let slideIndex = 1;

function openModal(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modalImg');

    modal.style.display = 'block';
    modalImg.src = imageSrc;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const modalImg = document.getElementById('modalImg');
    const images = document.querySelectorAll('#AAA img');
    
    if (n > images.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = images.length;
    }

    modalImg.src = images[slideIndex - 1].src;
}

// Додати обробник подій для клавіатурних стрілок
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        plusSlides(-1);
    } else if (event.key === 'ArrowRight') {
        plusSlides(1);
    }
});
