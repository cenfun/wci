# wci-prime
Built from [primeicons@5.0.0](https://github.com/primefaces/primeicons)  

238 icons / size: 51.2KB / gzip: 37.3KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#prime](https://cenfun.github.io/wci/#prime)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-prime
```
# API Usage
```js
import { icon, getIcon } from "wci-prime";

const $icon = document.createElement("wci-prime");
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

<script src="path-to/wci-prime/dist/wci-prime.js"></script>

<wci-prime name="[icon-name]"></wci-prime>
<wci-prime name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-prime>
```
see [public/index.html](public/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)