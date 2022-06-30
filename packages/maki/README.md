# wci-maki
Built from [@mapbox/maki@7.1.0](https://github.com/mapbox/maki)  

204 icons / size: 54.2KB / gzip: 39.5KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#maki](https://cenfun.github.io/wci/#maki)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-maki
```
# API Usage
```js
import { icon, getIcon } from "wci-maki";

const $icon = document.createElement("wci-maki");
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

<script src="path-to/wci-maki/dist/wci-maki.js"></script>

<wci-maki name="[icon-name]"></wci-maki>
<wci-maki name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-maki>
```
see [public/index.html](public/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)