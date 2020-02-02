import '../elements/templates/serviceSection'
import '../elements/templates/defaultSection'
import search from '../../../static/img/search.png'

class _Backend extends HTMLElement{
    constructor() {
        super();
        this.innerHTML = `
       <default-section>
            <h1 class="title">Backend</h1>
        </default-section>
        
        <service-section src="${search}">
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
        `
    }
}
customElements.define('index-backend', _Backend);
