import icon from './dist/wci-ant.js';

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
        return ['name', 'size', 'color', 'radius', 'background'];
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

        const color = this.getAttribute('color');
        let $color = '';
        if (color) {
            $color = `color: ${color};`;
        }

        const background = this.getAttribute('background');
        let $background = '';
        if (background) {
            $background = `background: ${background};`;
        }

        const radius = this.getAttribute('radius');
        let $radius = '';
        if (radius) {
            $radius = `border-radius: ${radius};`;
        }

        const fullSvg = getIcon(name, 'fullSvg');

        this.$style.textContent = `
            :host, svg {
                display: block;
            }
            div {
                width: ${size};
                height: ${size};
                ${$color}
                ${$background}
                ${$radius}
            }
        `;

        this.$container.innerHTML = fullSvg;

    }
}

const tagName = 'wci-ant';
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