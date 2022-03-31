# wci-awesome
Built from [@fortawesome/free-solid-svg-icons@6.1.1](https://github.com/FortAwesome/Font-Awesome)  

1385 icons / size: 473.3KB / gzip: 354.9KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/awesome/preview/](https://cenfun.github.io/wci/awesome/preview/)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-awesome
```
# API Usage
```js
import { icon, getIcon } from "wci-awesome";

const $icon = document.createElement("wci-awesome");
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

<script src="path-to/wci-awesome/dist/wci-awesome.js"></script>

<wci-awesome name="[icon-name]"></wci-awesome>
<wci-awesome name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-awesome>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)