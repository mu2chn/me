class HeroComponent extends HTMLElement{
    constructor() {
        super();
        this.innerHTML = `
        <section class="hero is-info is-fullheight">
            <!-- Hero head: will stick at the top -->
            <div class="hero-head">
                <face-header></face-header>
            </div>
        
            <!-- Hero content: will be in the middle -->
            <div class="hero-body" >
                <div class="container has-text-centered">
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
                            <li><a id="intro_section">Introduction</a></li>
                            <li><a id="front_section">Frontend</a></li>
                            <li><a id="back_section">Backend</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
        `
    }
}

customElements.define('face-hero', HeroComponent);
