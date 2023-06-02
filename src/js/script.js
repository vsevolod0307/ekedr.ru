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
  
  const filter = document.querySelector("#filter");
  const filterContent = document.querySelector(".filter-mobile-box");
  const filterMobile = document.querySelector(".filter-mobile");
  const filterClose = document.querySelector(".filter-mobile-close");
  
  filter.addEventListener("click", () => {
    filterContent.style.opacity = "1";
    filterContent.style.visibility = "visible";
    filterMobile.style.left = "0";
    filterMobile.style.transition = "1s all"
  })
  
  filterClose.addEventListener("click", () => {
    filterMobile.style.left = "-600px";
    filterMobile.style.transition = "0.5s all"
    filterContent.style.opacity = "0";
    filterContent.style.visibility = "hidden";
  })
})