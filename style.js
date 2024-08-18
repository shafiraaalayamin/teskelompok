// Add event listeners for button clicks, if necessary
// Example:
const registrationBtn = document.querySelector('.btn:first-child');
registrationBtn.addEventListener('click', () => {
    // Handle registration button click
    // e.g., redirect to a registration page
});

const watchVideoBtn = document.querySelector('.btn:last-child');
watchVideoBtn.addEventListener('click', () => {
    // Handle watch video button click
    // e.g., open a modal or redirect to a video page
});






// JavaScript untuk menambahkan animasi scroll
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.getElementById(heroSection);

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                heroSection.classList.add(show-Selection);
            }
        });
    });

    observer.observe(heroSection);
});

// JavaScript untuk slider otomatis
let currentImageIndex = 0;
const images = [
    'path/to/your/image1.jpg',
    'path/to/your/image2.jpg',
    'path/to/your/image3.jpg'
];
const sliderImage = document.getElementById(images);

function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    sliderImage.src = images[currentImageIndex];
}

// Ganti gambar setiap 3 detik
setInterval(changeImage, 3000);



// Ambil modal element
var modal = document.getElementById(modal);

// Ambil gambar dan insert ke dalam modal
var img = document.getElementById(img);
var modalImg = document.getElementById(img);
var captionText = document.getElementById("caption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Ambil element untuk menutup modal
var span = document.getElementsByClassName("close")[0];

// Ketika user menekan tombol "x", tutup modal
span.onclick = function() {
    modal.style.display = "none";
}
