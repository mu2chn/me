class DefaultSection extends HTMLElement{
    constructor() {
        super();
        this.innerHTML = `
        <section class="hero is-white is-medium">
            <div class="hero-body">
                <div class="container has-text-centered">
                    ${this.innerHTML}
                </div>
            </div>
        </section>
        `
    }
}

customElements.define("default-section", DefaultSection);
