import './_Backend'
import  './_Frontend'
import '../elements/templates/defaultSection'
import '../elements/templates/serviceSection'
import '../elements/layouts/footer'
import '../elements/layouts/hero'

class Index extends HTMLElement{
    constructor() {
        super();
        this.innerHTML = `
            <index-hero></index-hero>
            <default-section>
                    <h1 class="title">Introduction</h1>
                    <h2 class="subtitle">
                        主にWeb系をやります。サーバーサイドからフロントまで色々制作しております。以下に掲載しておりますのでよろしければご覧ください。
                    </h2>
            </default-section>
            <index-backend></index-backend>
            <index-frontend></index-frontend>
            <default-section>
                <h1 class="title">Contact</h1>
                <h2 class="subtitle">
                    <i class="far fa-envelope"></i> <a href="mailto:box@e.face9363.net">box@e.face9363.net</a>
                </h2>
            </default-section>
            <blue-footer></blue-footer>
        `;
        this.querySelector('index-hero').links = [
            {tag: this.querySelector('default-section'), name: "Introduction"},
            {tag: this.querySelector('index-frontend'), name: "Frontend"},
            {tag: this.querySelector('index-backend'), name: "Backend"}
        ]
    }
}

customElements.define('index-page', Index);

export default function main() {

}
