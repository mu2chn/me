import '../elements/templates/serviceSection'
import '../elements/templates/defaultSection'
import md4tex from '../../../static/svg/md4latex_plane.svg'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faGithubAlt} from "@fortawesome/free-brands-svg-icons/faGithubAlt";

class _Scripts extends HTMLElement{
    init_icon(){
        library.add(faGithubAlt);
    }

    constructor() {
        super();
        this.init_icon();

        this.innerHTML = `
         <default-section>
            <h1 class="title">Others</h1>
        </default-section>
        <service-section src="${md4tex}" color="dark">
            <h1 class="title">
                md4latex
            </h1>
            <h2 class="subtitle">
                面倒なLaTeXをMarkDownライクに記述できます。
            </h2>
            <div>
                <a href="https://github.com/face9363/md4latex"><i class="fab fa-github-alt fa-2x"></i></a>
            </div>
        </service-section>
        `
    }
}

customElements.define('index-scripts', _Scripts);
