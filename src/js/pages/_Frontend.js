import '../elements/templates/serviceSection'
import '../elements/templates/defaultSection'
import text from '../../../static/svg/timetext.svg'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";
import {faGithubAlt} from "@fortawesome/free-brands-svg-icons/faGithubAlt";

class _Frontend extends HTMLElement{
    init_icon(){
        library.add(faExternalLinkAlt, faGithubAlt);
    }

    constructor() {
        super();
        this.init_icon()

        this.innerHTML = `
         <default-section>
            <h1 class="title">Frontend</h1>
        </default-section>
        <service-section src="${text}" color="light">
            <h1 class="title">
                TimeText〜板書共有サイト〜
            </h1>
            <h2 class="subtitle">
                板書の整理、共有を一発で。
            </h2>
            <div>
                <a href="https://timetext.face9363.net"><i class="fas fa-external-link-alt fa-2x has-text-dark"></i></a>
                <a href="https://github.com/face9363/TimeText"><i class="fab fa-github-alt fa-2x has-text-dark"></i></a>
            </div>
        </service-section>
        `
    }
}

customElements.define('index-frontend', _Frontend)
