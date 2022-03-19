# wci-hero

Web Components Icons for [hero](https://github.com/tailwindlabs/heroicons)

# Features
* Web Components
* Vector SVG Icons 
* Customize Color and Size
* High Compressed Bundle
# Installation
```sh
npm install wci-hero
```
# API Usage
```js
import { icon, getIcon } from "wci-hero";

const $icon = document.createElement("wci-hero");
$icon.setAttribute("name", "[icon-name]");
$icon.setAttribute("size", "64px");
$icon.setAttribute("color", "#000");
document.body.appendChild($icon);

// get all icons
icon.list.forEach(item => {
    const ic = getIcon(item.id);
    console.log(ic)
});
```
# Browser Usage
```html

<script src="path-to/wci-hero/dist/wci-hero.js"></script>

<wci-hero name="[icon-name]"></wci-hero>
<wci-hero name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-hero>
```
see [preview/index.html](preview/index.html)

# High Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* 1, [svgo](https://github.com/svg/svgo) for single svg icon
* 2, repeated svg contents will be removed
* 3, [lz-string](https://github.com/pieroxy/lz-string) compression

