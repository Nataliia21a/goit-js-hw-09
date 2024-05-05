const images = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

const galleryEl = document.querySelector('.gallery');

function creatListGallery(image) {
  const listsGalleryEl = document.createElement('li');
  listsGalleryEl.classList.add('gallery-item');
  const galleryLinkEl = document.createElement('a');
  galleryLinkEl.classList.add('gallery-link');
  galleryLinkEl.href = image.original;
  const galleryImageEl = document.createElement('img');
  galleryImageEl.classList.add('gallery-image');
  galleryImageEl.src = image.preview;
  // galleryImageEl.setAttribute('data-source', image.original);
  galleryImageEl.alt = image.description;
  galleryImageEl.width = 360;
  galleryImageEl.height = 200;
  galleryImageEl.display = 'block';
  // знімаємо автоматичні налаштування списку
  listsGalleryEl.style.listStyle = 'none';
  listsGalleryEl.append(galleryLinkEl);
  galleryLinkEl.append(galleryImageEl);
  return listsGalleryEl;
}
const createLists = images.map(creatListGallery);
galleryEl.append(...createLists);

galleryEl.style.display = 'flex';
galleryEl.style.flexWrap = 'wrap';
galleryEl.style.gap = '20px 24px';
galleryEl.style.justifyContent = 'center';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';

// const gallery = new SimpleLightbox('.gallery a', {
//   captions: true,
//   captionsData: 'alt',
//   captionDelay: 250,
// });

// const onGalleryClick = event => {
// знімаємо налаштування браузера за замовчуванням(Н: атоматичне завантаження зображення)
// event.preventDefault();
// перевірка чи клік на зображенні чи між зображеннями
// if (event.target === event.currentTarget) {
//   return;
// }

// метод з бібліотеки, у дужках вказуємо тег зміст якого буде відображатись у модальному вікні
//   const instance = basicLightbox.create(`
//   <img src = ${event.target.dataset.source} alt=${event.target.alt}>
// `);
//   instance.show();
// };
// присвоюємо слухача з делегуванням на список зображень
// galleryEl.addEventListener('click', onGalleryClick);
