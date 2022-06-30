# wci-mdi
Built from [@mdi/svg@6.8.96](https://github.com/Templarian/MaterialDesign-SVG)  

6896 icons / size: 1.0MB / gzip: 790.6KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#mdi](https://cenfun.github.io/wci/#mdi)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-mdi
```
# API Usage
```js
import { icon, getIcon } from "wci-mdi";

const $icon = document.createElement("wci-mdi");
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

<script src="path-to/wci-mdi/dist/wci-mdi.js"></script>

<wci-mdi name="[icon-name]"></wci-mdi>
<wci-mdi name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-mdi>
```
see [public/index.html](public/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)