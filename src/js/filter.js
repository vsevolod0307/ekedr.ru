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