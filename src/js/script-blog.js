const btnMore = document.querySelector('.blog__btn-more');
const moreItems = document.querySelectorAll('.blog__item');
if (window.innerWidth > 1440) {
    const moreItems = document.querySelectorAll('.blog__item:nth-child(n+10)');
    moreItems.forEach(e => {
        e.classList.toggle('blog__hidden')
    })
}else if (1201 <= window.innerWidth < 1440) {
    const moreItems = document.querySelectorAll('.blog__item:nth-child(n+5)');
    moreItems.forEach(e => {
        e.classList.toggle('blog__hidden')
    })
} else if (window.innerWidth < 1201) {
    const moreItems = document.querySelectorAll('.blog__item:nth-child(n+7)');
    moreItems.forEach(e => {
        e.classList.toggle('blog__hidden')
    })
}
btnMore.addEventListener( 'click', () => {
    moreItems.forEach(el => { 
        el.classList.remove('blog__hidden')
        el.classList.remove('mob')});
        
    btnMore.classList.add('blog__btn-hidden');
  })