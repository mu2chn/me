import './header'
import smoothscroll from "smoothscroll-polyfill";

class HeroComponent extends HTMLElement{
    constructor() {
        super();
        smoothscroll.polyfill();

        this.innerHTML = `
        <section class="center-hero is-dark is-fullheight logo-font">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head">
                <blue-header></blue-header>
            </div>
        
            <!-- Hero content: will be in the middle -->
            <div class="hero-body" >
                <div class="container has-text-centered ">
                    <h1 class="title">
                        Portfolio
                    </h1>
                    <h2 class="subtitle">
                        by face9363
                    </h2>
                </div>
            </div>
        
            <!-- Hero footer: will stick at the bottom -->
            <div class="hero-foot">
                <nav class="tabs is-boxed is-fullwidth">
                    <div class="container">
                        <ul>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
        `;
        this.ul = this.querySelector('ul');
    }

    set links(links){
        const fragment = document.createDocumentFragment();
        links.map( (link) =>{
            const div = document.createElement('li');
            div.insertAdjacentHTML('beforeend', `<a>${link.name}</a>`);
            const a = div.querySelector('a');
            a.addEventListener("click", () => {
                link.tag.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
            fragment.appendChild(div);
        });
        this.ul.appendChild(fragment);
    }

}

customElements.define('index-hero', HeroComponent);
