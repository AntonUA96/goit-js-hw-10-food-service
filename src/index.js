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

  const body = document.querySelector('body');
  const checkBox = document.querySelector('#theme-switch-toggle');
  
  
  body.classList.add(Theme.LIGHT);

  checkBox.addEventListener('change', onChange);

function onChange(e) {
body.classList.toggle(Theme.DARK);

localStorage.setItem('Theme', body.classList);
};

const saveMessage = localStorage.getItem('Theme');

if(saveMessage === 'light-theme dark-theme') {

  body.classList.add(Theme.DARK);
  checkBox.checked = true;
}