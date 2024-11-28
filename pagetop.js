const pagetop = document.querySelector('.button_icon');

pagetop.addEventListener('click',scroll_to_top);

function scroll_to_top(){
    window.scroll({top: 0,behavior: 'smooth'});
};
