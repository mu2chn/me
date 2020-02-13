import '../elements/templates/serviceSection'
import '../elements/templates/defaultSection'
import search from '../../../static/img/search.png'
import biker from  '../../../static/svg/logo_plane.svg'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faExternalLinkAlt} from "@fortawesome/free-solid-svg-icons/faExternalLinkAlt";
import {faGithubAlt} from "@fortawesome/free-brands-svg-icons/faGithubAlt";
import {faNodeJs} from "@fortawesome/free-brands-svg-icons/faNodeJs";

class _Backend extends HTMLElement{
    init_icon(){
        library.add(faExternalLinkAlt, faGithubAlt, faNodeJs);
    }

    constructor() {
        super();
        this.init_icon();

        this.innerHTML = `
       <default-section>
            <h1 class="title">Backend</h1>
        </default-section>
        
        <service-section src="${search}" color="dark">
            <h1 class="title">
                SearchDrive〜過去問検索エンジン〜
            </h1>
            <h2 class="subtitle">
                オンラインストレージ上の大学の定期試験の過去門をクローリング。簡単に一括検索ができます。
            </h2>
            <div>
                <a href="https://engine.face9363.net"><i class="fas fa-external-link-alt fa-2x"></i></a>
                <a href="https://github.com/face9363/sharedrive"><i class="fab fa-github-alt fa-2x"></i></a>
            </div>
        </service-section>
        
        <service-section src="${biker}" color="info">
            <h1 class="title">
                ShareBiker〜自転車シェアリングサイト〜
            </h1>
            <h2 class="subtitle">
                手持ちの自転車を気軽にシェアリングしよう。
            </h2>
            <div>
                <a href="https://kyotosharebike.com"><i class="fas fa-external-link-alt fa-2x"></i></a>
                <a href="https://github.com/face9363/share_bike"><i class="fab fa-github-alt fa-2x"></i></a>
            </div>
        </service-section>
        `
    }
}
customElements.define('index-backend', _Backend);
