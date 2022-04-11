# wci-tabler
Built from [@tabler/icons@1.63.0](https://github.com/tabler/tabler-icons)  

1719 icons / size: 151.0KB / gzip: 111.4KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/tabler/preview/](https://cenfun.github.io/wci/tabler/preview/)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-tabler
```
# API Usage
```js
import { icon, getIcon } from "wci-tabler";

const $icon = document.createElement("wci-tabler");
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

<wci-tabler name="[icon-name]"></wci-tabler>
<wci-tabler name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-tabler>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)