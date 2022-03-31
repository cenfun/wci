# wci-coreui
Built from [@coreui/icons@2.1.0](https://github.com/coreui/coreui-icons)  

554 icons / size: 146.2KB / gzip: 107.8KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/coreui/preview/](https://cenfun.github.io/wci/coreui/preview/)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-coreui
```
# API Usage
```js
import { icon, getIcon } from "wci-coreui";

const $icon = document.createElement("wci-coreui");
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

<script src="path-to/wci-coreui/dist/wci-coreui.js"></script>

<wci-coreui name="[icon-name]"></wci-coreui>
<wci-coreui name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-coreui>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)