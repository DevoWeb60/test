
export const $ = (selector, node = document) => node.querySelector(selector);
export const $$ = (selector, node = document) => node.querySelectorAll(selector);


createGallery(picturesAll);
createGallery(picturesFiltered);

export function createGallery(pictures) {
    const gallery = document.createElement('div');
    gallery.classList.add('gallery');
    pictures.forEach(picture => {
        const pictureElement = createPicture(picture);
        gallery.appendChild(pictureElement);
    });
    return gallery;
}

export function createPicture(picture) {
    const pictureElement = document.createElement('div');
    pictureElement.classList.add('picture');
    pictureElement.innerHTML = `
        <img src="${picture.url}" alt="${picture.title}">
        <div class="picture__title">${picture.title}</div>
    `;
    return pictureElement;
}