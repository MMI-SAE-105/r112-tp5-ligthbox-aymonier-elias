// *** LIGHTBOX ***

const img = document.querySelectorAll("img");
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector(".lightbox__img")

img.forEach(element => {
    element.addEventListener('click', () => {
        lightboxImg.src = element.dataset.fullImg;
        lightbox.showModal();
    })
});

lightbox.addEventListener('click', () => {
    lightbox.close();
})