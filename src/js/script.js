// *** LIGHTBOX ***

const img = document.querySelectorAll("img");
const lightbox = document.querySelector("#lightbox");

img.forEach(element => {
    element.addEventListener('click', () => {
        lightbox.showModal();
    })
});

lightbox.addEventListener('click', () => {
    lightbox.close();
})