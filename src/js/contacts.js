const swiper = new Swiper('.swiper', {
    loop: true,
    autoHeight: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
      },
    
    breakpoints: {

    744: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    577: {
        slidesPerView: 1.2,
        spaceBetween: 10,
    }
  }});

  const element = document.querySelector('.select');
  const choices = new Choices(element, {
    searchEnabled: false,
});