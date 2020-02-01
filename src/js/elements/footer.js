class FooterComponent extends HTMLElement{
    constructor() {
        super();
        this.innerHTML = `
        <footer class="footer">
            <div class="content has-text-centered">
                <p class="has-text-white">
                    face9363 &copy; 2020 All rights reserved.<br/>
                    Hosting by Netlify.
                </p>
            </div>
        </footer>`
    }
}

customElements.define('face-footer', FooterComponent);
