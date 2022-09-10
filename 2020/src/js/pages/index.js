import './_Backend'
import './_Frontend'
import './_Scripts'
import '../elements/templates/defaultSection'
import '../elements/templates/serviceSection'
import '../elements/layouts/footer'
import '../elements/layouts/hero'

import '../../style/style.scss';
import {dom, library} from '@fortawesome/fontawesome-svg-core'


class Index extends HTMLElement{
    constructor() {
        super();

        dom.watch();

        this.innerHTML = `
            <div class="all-fonts">
                <index-hero></index-hero>
                <default-section>
                <div class="columns is-multiline is-centered">
                    <h1 class="title column is-full">Introduction</h1>
                    <h2 class="subtitle column is-half">
                        工学部情報学科の大学3回生です。主にWeb系をやります。サーバーサイドからフロントまで色々制作しております。以下に制作物を掲載しておりますのでよろしければご覧ください。
                    </h2>
                </div>
                </default-section>
                <index-backend></index-backend>
                <index-frontend></index-frontend>
                <index-scripts></index-scripts>
                <default-section>
                    <h1 class="title">Contact</h1>
                    <h2 class="subtitle">
                        <i class="far fa-envelope"></i> <a href="mailto:me@face0u0.net">me@face0u0.net</a>
                    </h2>
                </default-section>
                <blue-footer></blue-footer>
            </div>
        `;
        this.querySelector('index-hero').links = [
            // {tag: this.querySelector('default-section'), name: "Introduction"},
            {tag: this.querySelector('index-backend'), name: "Backend"},
            {tag: this.querySelector('index-frontend'), name: "Frontend"},
            {tag: this.querySelector('index-scripts'), name: "Others"}
        ]
    }
}

customElements.define('index-page', Index);

export default function main() {

}
