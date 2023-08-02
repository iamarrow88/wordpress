/* TODO
2. модальные окна при нажатии на Записаться на интенсив */

const closeBtn = document.querySelector('.modal__close');
const layout = document.querySelector('#layout');

function closeModalWindow(e) {
  if ([...e.target.classList].includes('layout') ||
    [...e.target.classList].includes('modal__close')) {
    layout.classList.remove('visible');
  }
}
closeBtn.addEventListener('click', closeModalWindow);
layout.addEventListener('click', closeModalWindow);


const firstBtn = document.querySelector('.promo__btn');
const secondBtn = document.querySelector('.gift__btn');

function openModalWindow(e) {
  layout.classList.add('visible');
}

firstBtn.addEventListener('click', openModalWindow);
secondBtn.addEventListener('click', openModalWindow);