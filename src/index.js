import './style/style.scss';
import {config, dom, library} from '@fortawesome/fontawesome-svg-core'
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt'
import {faGithubAlt} from "@fortawesome/free-brands-svg-icons/faGithubAlt";

import './js/pages/index'

function main(){
    library.add(faExternalLinkAlt, faGithubAlt);
    dom.watch();
}

main();
