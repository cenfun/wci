# wci-tiny
Built from [super-tiny-icons@0.4.0](https://github.com/edent/SuperTinyIcons)  

275 icons / size: 82.9KB / gzip: 61.4KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#tiny](https://cenfun.github.io/wci/#tiny)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-tiny
```
# API Usage
```js
import { icon, getIcon } from "wci-tiny";

const $icon = document.createElement("wci-tiny");
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

<script src="path-to/wci-tiny/dist/wci-tiny.js"></script>

<wci-tiny name="[icon-name]"></wci-tiny>
<wci-tiny name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-tiny>
```
see [public/index.html](public/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)