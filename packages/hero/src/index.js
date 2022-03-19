import icon from './dist/wci-hero.js';

const getIcon = function(id, key) {
    if (!id) {
        return null;
    }
    let item;
    const list = icon.list;
    for (let i = 0, l = list.length; i < l; i++) {
        const it = list[i];
        if (id === it.id || id === it.fullId) {
            item = it;
            break;
        }
    }
    if (!item) {
        return null;
    }
    if (key) {
        return item[key];
    }
    return item;
};

class IconElement extends HTMLElement {

    static get observedAttributes() {
        return ['name', 'size', 'color'];
    }
    
    constructor() {
        super();
        const shadow = this.attachShadow({
            mode: 'open'
        });
        this.$style = document.createElement('style');
        shadow.appendChild(this.$style);

        this.$container = document.createElement('div');
        shadow.appendChild(this.$container);
    }
  
    connectedCallback() {
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.render();
    }

    render() {

        const name = this.getAttribute('name') || 'blank';
        const size = this.getAttribute('size') || '100%';
        const color = this.getAttribute('color') || '#000';

        this.$style.textContent = `
            :host {
                display: inline-block;
            }
            svg {
                display: block;
            }
            div {
                width:${size};
                height:${size};
                color:${color};
            }
        `;

        this.$container.innerHTML = getIcon(name, 'fullSvg');

    }
}

const tagName = 'wci-hero';
//override tagName
IconElement.tagName = tagName;

//define custom element
if (customElements.get(tagName)) {
    console.error(`${tagName} already defined`);
} else {
    customElements.define(tagName, IconElement);
}

export {
    tagName,
    icon,
    getIcon,
    IconElement
};

export default {
    tagName,
    icon,
    getIcon,
    IconElement
};