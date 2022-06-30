# wci-icomoon
Built from [icomoon-free-npm@0.0.0](https://github.com/Keyamoon/IcoMoon-Free)  

491 icons / size: 115.9KB / gzip: 86.2KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#icomoon](https://cenfun.github.io/wci/#icomoon)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-icomoon
```
# API Usage
```js
import { icon, getIcon } from "wci-icomoon";

const $icon = document.createElement("wci-icomoon");
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

<script src="path-to/wci-icomoon/dist/wci-icomoon.js"></script>

<wci-icomoon name="[icon-name]"></wci-icomoon>
<wci-icomoon name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-icomoon>
```
see [public/index.html](public/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)