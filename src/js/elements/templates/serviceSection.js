class ServiceSection extends HTMLElement {
    static get observedAttributes() { return ['src']; }

    constructor() {
        super();

        this.innerHTML = `
        <style>
        </style>
        <section class="hero is-primary is-medium">
            <div class="hero-body">
                <div class="container">
                    <div class="columns is-multiline">
                        <div class="column has-text-centered is-half">
                            ${this.innerHTML}
                        </div>
                        <div class="column is-half is-vcentered">
                            <figure class="image is-128x128">
                                <img src="${this.attrCheck('src')}" class="image">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      `;

        this._image = this.querySelector('img')
    }

    attrCheck(attr) {
        let value = null;
        if(this.hasAttribute(attr)){
            value =  this.getAttribute(attr)
        }
        return value;
    }

    setImg(newValue){
        this._image.src = newValue;
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'src':
                this.setImg(newValue);
                break;
        }
    }

    set src(newValue){this.setImg(newValue)}

}
customElements.define("service-section",ServiceSection);
