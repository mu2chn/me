import '../elements/templates/serviceSection'
import '../elements/templates/defaultSection'
import search from '../../../assets/svg/searchdrive.svg'
import biker from  '../../../assets/svg/logo_plane.svg'
import shabel from '../../../assets/png/shabel.png'
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
                SearchDrive
            </h1>
            <h2 class="subtitle">
                オンラインストレージ上の大学の定期試験の過去門をクローリング。簡単に一括検索ができます。
            </h2>
            <h4 class="subtitle">
                nodejs・mongodb
            </h4>
            <div>
                <a href="https://engine.face0u0.net"><i class="fas fa-external-link-alt fa-2x"></i></a>
                <a href="https://github.com/face0u0/sharedrive"><i class="fab fa-github-alt fa-2x"></i></a>
            </div>
        </service-section>
        
        <service-section src="${biker}" color="info">
            <h1 class="title">
                ShareBiker
            </h1>
            <h2 class="subtitle">
                手持ちの自転車を気軽にシェアリングできます。
            </h2>
            <h4 class="subtitle">
                ruby・paypal・docker・mysql                
            </h4>
            <div>
                <a href="https://sharebike.0uh.net"><i class="fas fa-external-link-alt fa-2x"></i></a>
            </div>
        </service-section>
        <service-section src="${shabel}" color="light">
            <h1 class="title">
                Shabel
            </h1>
            <h2 class="subtitle">
                Android向けチャットアプリです。４人チームで２ヶ月ほどかけて開発しました。
            </h2>
            <h4 class="subtitle">
                springboot・kotlin・android・websocket                
            </h4>
            <div>
                <a href="https://github.com/line-school2018summer/kyoto-a-api"><i class="fab fa-github-alt fa-2x"></i></a>
            </div>
        </service-section>
        `
    }
}
customElements.define('index-backend', _Backend);
