# wci-unicons
Built from [@iconscout/unicons@4.0.1](https://github.com/Iconscout/unicons)  

1395 icons / size: 265.0KB / gzip: 198.9KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#unicons](https://cenfun.github.io/wci/#unicons)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-unicons
```
# API Usage
```js
import { icon, getIcon } from "wci-unicons";

const $icon = document.createElement("wci-unicons");
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

<script src="path-to/wci-unicons/dist/wci-unicons.js"></script>

<wci-unicons name="[icon-name]"></wci-unicons>
<wci-unicons name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-unicons>
```
see [public/index.html](public/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)