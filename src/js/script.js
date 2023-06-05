window.addEventListener("DOMContentLoaded", () => {
  function modalState(close, open, selector, transition = false) {
    open.addEventListener("click", () => {
      if(transition) {
        selector.style.right = "0";
        selector.style.transition = "1s all"
      } else {
        selector.style.display = "block";
      }
    })
  
    close.addEventListener("click", () => {
      if(transition) {
        selector.style.right = "-500px";
        selector.style.transition = ".5s all"
      } else {
        selector.style.display = "none";
      }
    })
  }
  
  const hamburger = document.querySelector(".header-hamburger");
  const menu = document.querySelector(".header-mobile");
  const closeMenu = document.querySelector(".header-mobile-close");
  
  modalState(closeMenu, hamburger, menu, true)
  
  const callPhone = document.querySelector(".header_call-phone");
  const modalWrapper = document.querySelector(".modal-wrapper");
  const modalClose = document.querySelector(".modal-close");
  
  modalState(modalClose, callPhone, modalWrapper)
})