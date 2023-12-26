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

function openModal(imageSrc, title) {
    const modal = document.getElementById('myModal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
  
    modal.style.display = 'block';
    modalImg.src = imageSrc;
    captionText.innerHTML = title;
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }
  