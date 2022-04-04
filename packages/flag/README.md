# wci-flag
Built from [country-flag-icons@1.4.25](https://gitlab.com/catamphetamine/country-flag-icons)  

512 icons / size: 105.0KB / gzip: 76.8KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/flag/preview/](https://cenfun.github.io/wci/flag/preview/)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-flag
```
# API Usage
```js
import { icon, getIcon } from "wci-flag";

const $icon = document.createElement("wci-flag");
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

<script src="path-to/wci-flag/dist/wci-flag.js"></script>

<wci-flag name="[icon-name]"></wci-flag>
<wci-flag name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-flag>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)