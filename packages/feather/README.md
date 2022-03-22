# wci-feather
Built from [feather-icons@4.28.0](https://github.com/feathericons/feather)  

286 icons / size: 33.1KB / gzip: 22.2KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/feather/preview/](https://cenfun.github.io/wci/feather/preview/)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-feather
```
# API Usage
```js
import { icon, getIcon } from "wci-feather";

const $icon = document.createElement("wci-feather");
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

<script src="path-to/wci-feather/dist/wci-feather.js"></script>

<wci-feather name="[icon-name]"></wci-feather>
<wci-feather name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-feather>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)