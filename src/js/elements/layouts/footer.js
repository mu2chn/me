class FooterComponent extends HTMLElement{
    constructor() {
        super();
        this.innerHTML = `
        <footer class="footer">
            <div class="content has-text-centered logo-font">
                <p class="has-text-white">
                    mu2chn &copy; 2020 All rights reserved.<br/>
                    Hosting by vercel
                </p>
            </div>
        </footer>`
    }
}

customElements.define('blue-footer', FooterComponent);
