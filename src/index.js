import './styles.css';
import disheslist from './menu.json';
import itemsTemplate from './templates/gallery-items.hbs';

const markup = itemsTemplate(disheslist);
console.log(markup);

const galleryRef = document.querySelector('.js-menu');
galleryRef.insertAdjacentHTML('beforeend', markup);


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  