import './style/style.scss';
import search from '../static/img/search.png'
import text from '../static/img/text.png'
import '@fortawesome/fontawesome-free/js/all.min'

function setScroll(clickID, scrollID) {
    const target = document.querySelector(clickID);
    target.addEventListener("click", () => {
        document.querySelector(scrollID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        target.classList.toggle('is-active');
    })
}

function main(){
    document.querySelector("#search_img").src = search;
    document.querySelector("#text_img").src = text;
    const burger = document.querySelector('.navbar-burger');
    const menu = document.querySelector('.navbar-menu');
    burger.addEventListener("click", ()=>{
        menu.classList.toggle('is-active');
        burger.classList.toggle('is-active');
    });

    setScroll('#intro_section', '#introduction');
    setScroll('#front_section', '#frontend');
    setScroll('#back_section', '#backend');
}

main();
