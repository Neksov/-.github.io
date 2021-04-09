window.addEventListener('DOMContentLoaded' , () =>{//load дожидается загрузки всей страницы, DOMContentLoaded дожидает только загрузки DOM дерево
'use strict'

  //бургер меню
  const burger = () =>{
    const menuToggle = document.querySelector('#menu-togle'),
          mobileNavContainer = document.querySelector('.menu-block');

          document.addEventListener('click', (elem) =>{
            if(elem.target.closest('#menu-togle')){
              menuToggle.classList.toggle('menu-icon-active');
              mobileNavContainer.classList.toggle('menu-block--active');  
            }else if(elem.target.closest('li>a') || !elem.target.closest('nav')){
              menuToggle.classList.remove('menu-icon-active');
              mobileNavContainer.classList.remove('menu-block--active');  
            }
          });
  };
  burger();

  //анимация 
  new WOW().init();
});