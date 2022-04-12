# wci-oct
Built from [@primer/octicons@17.0.0](https://github.com/primer/octicons)  

490 icons / size: 123.5KB / gzip: 90.8KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#oct](https://cenfun.github.io/wci/#oct)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-oct
```
# API Usage
```js
import { icon, getIcon } from "wci-oct";

const $icon = document.createElement("wci-oct");
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

<script src="path-to/wci-oct/dist/wci-oct.js"></script>

<wci-oct name="[icon-name]"></wci-oct>
<wci-oct name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-oct>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)