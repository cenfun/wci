# wci-charm
Built from [charm-icons@0.14.0](https://github.com/jaynewey/charm-icons)  

250 icons / size: 29.2KB / gzip: 19.2KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#charm](https://cenfun.github.io/wci/#charm)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-charm
```
# API Usage
```js
import { icon, getIcon } from "wci-charm";

const $icon = document.createElement("wci-charm");
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

<script src="path-to/wci-charm/dist/wci-charm.js"></script>

<wci-charm name="[icon-name]"></wci-charm>
<wci-charm name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-charm>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)