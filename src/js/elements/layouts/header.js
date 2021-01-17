class HeaderComponent extends HTMLElement{
    constructor() {
        super();

        this.innerHTML = `
        <header class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item">
                        face0u0
                    </a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
                </div>
                <div id="navbarMenuHeroC" class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item is-active" href="#">
                            Home
                        </a>
                        <a class="navbar-item" href="https://github.com/face0u0">
                            github <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        `

        const burger = this.querySelector('.navbar-burger');
        const menu = this.querySelector('.navbar-menu');
        burger.addEventListener("click", ()=>{
            menu.classList.toggle('is-active');
            burger.classList.toggle('is-active');
        });
    }
}

customElements.define("blue-header", HeaderComponent);
