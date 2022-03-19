# wci-tabler

Web Components Icons for [tabler](https://github.com/tabler/tabler-icons)

# Features
* Web Components
* Vector SVG Icons 
* Customize Color and Size
* High Compressed Bundle
# Installation
```sh
npm install wci-tabler
```
# API Usage
```js
import { tagName, icon, getIcon } from "wci-tabler";
const $icon = document.createElement(tagName);
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
<script src="path-to/wci-tabler/dist/wci-tabler.js"></script>
<wci-tabler name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-tabler>
```
see [preview/index.html](preview/index.html)

# High Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* 1, [svgo](https://github.com/svg/svgo) for single svg icon
* 2, repeated svg contents will be removed
* 3, [lz-string](https://github.com/pieroxy/lz-string) compression

