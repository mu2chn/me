class HeaderComponent extends HTMLElement{
    constructor() {
        super();

        this.innerHTML = `
        <header class="navbar">
            <div class="container">
                <div class="navbar-brand">
                    <a class="navbar-item">
                        Face
                    </a>
                    <span class="navbar-burger burger" data-target="navbarMenuHeroC"></span>
                </div>
                <div id="navbarMenuHeroC" class="navbar-menu">
                    <div class="navbar-end">
                        <a class="navbar-item is-active" href="#">
                            Home
                        </a>
                        <a class="navbar-item" href="https://coder.face9363.net">
                            Blog <i class="fas fa-external-link-alt"></i>
                        </a>
                        <a class="navbar-item" href="https://github.com/face9363">
                            github <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        `
    }
}

customElements.define("face-header", HeaderComponent);
