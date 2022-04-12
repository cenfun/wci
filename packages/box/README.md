# wci-box
Built from [boxicons@2.1.2](https://github.com/atisawd/boxicons)  

1600 icons / size: 318.4KB / gzip: 238.1KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#box](https://cenfun.github.io/wci/#box)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-box
```
# API Usage
```js
import { icon, getIcon } from "wci-box";

const $icon = document.createElement("wci-box");
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

<script src="path-to/wci-box/dist/wci-box.js"></script>

<wci-box name="[icon-name]"></wci-box>
<wci-box name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-box>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)