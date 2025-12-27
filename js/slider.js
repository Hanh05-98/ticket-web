const images = [
    "/banner1.jpg",
    "/banner2.jpg",
    "/banner3.jpg",
    "/banner4.jpg"
];

let index = 0;
const slide = document.getElementById("slide");
slide.src = images[index];

function next() {
    index = (index + 1) % images.length;
    slide.src = images[index];
}

function prev() {
    index = (index - 1 + images.length) % images.length;
    slide.src = images[index];
}
