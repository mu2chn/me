import '../elements/templates/serviceSection'
import '../elements/templates/defaultSection'
import text from '../../../static/img/text.png'

class _Backend extends HTMLElement{
    constructor() {
        super();
        this.innerHTML = `
        <default-section>
            <h1 class="title">Frontend</h1>
        </default-section>
        <service-section src="${text}">
            <h1 class="title">
                TimeText〜板書共有サイト〜
            </h1>
            <h2 class="subtitle">
                手軽に板書の整理、共有ができるサイトです。 写真を撮った時間に応じて授業単位での写真の振り分け、位置情報に基づき同じ授業を受ける人の写真を見られます。
            </h2>
            <div>
                <a href="https://timetext.face9363.net"><i class="fas fa-external-link-alt fa-2x"></i></a>
                <a href="https://github.com/face9363/TimeText"><i class="fab fa-github-alt fa-2x"></i></a>
            </div>
        </service-section>
        `
    }
}
customElements.define('index-backend', _Backend);
