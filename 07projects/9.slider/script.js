const slides = document.querySelectorAll('.slide');
let counter = 0;

// Position each slide side by side
slides.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`;
});

// Function to go to the previous slide
const goprev = () => {
    // If counter is 0, reset to the last slide (loop back)
    if (counter === 0) {
        counter = slides.length - 1;  // Go to the last slide
    } else {
        counter--;
    }
    slidesimage();
}

// Function to go to the next slide
const gonext = () => {
    // If counter reaches the last slide, reset to 0 (loop back)
    if (counter === slides.length - 1) {
        counter = 0;  // Reset to the first slide
    } else {
        counter++;
    }
    slidesimage();
}

// Update the slide display based on the counter
const slidesimage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}

// Initialize the slideshow display
slidesimage();
