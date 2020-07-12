'use strict';


const color = document.querySelector('.color'),
      card = document.querySelector('.card'),
      cardImg = document.querySelector('.card__img');

color.addEventListener('click', event => {
  const target = event.target;

  // console.log(target);

  if (target.tagName === 'SPAN') {
    const result = target.dataset.img;
    cardImg.src = result;
    console.log(cardImg.src);
  }
});
