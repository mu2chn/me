class FooterComponent extends HTMLElement{
    constructor() {
        super();
        this.innerHTML = `
        <footer class="footer">
            <div class="content has-text-centered logo-font">
                <p class="has-text-white">
                    face0u0 &copy; 2020 All rights reserved.<br/>
                    Hosting by github.io
                </p>
            </div>
        </footer>`
    }
}

customElements.define('blue-footer', FooterComponent);
