(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const close = document.querySelector('.header__nav-close');
    const menuLink = document.querySelectorAll('.header__link');
    burgerItem.addEventListener('click', () => {
      menu.classList.add('header__nav_active');
    });
    close.addEventListener('click', () => {
      menu.classList.remove('header__nav_active');
    });
    if (window.innerWidth < 768) {
      menuLink.forEach((el) => {
        el.addEventListener('click', ()=>{
          menu.classList.remove('header__nav_active')
        })
      });
    }
  })();