# wci-crypto
Built from [cryptocurrency-icons@0.18.0](https://github.com/spothq/cryptocurrency-icons)  

471 icons / size: 334.6KB / gzip: 251.7KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#crypto](https://cenfun.github.io/wci/#crypto)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-crypto
```
# API Usage
```js
import { icons, getIcon } from "wci-crypto";

const $icon = document.createElement("wci-crypto");
$icon.setAttribute("name", "[icon-name]");
$icon.setAttribute("size", "64px");
$icon.setAttribute("color", "#000");
document.body.appendChild($icon);

// get all icons
icons.forEach(item => {
    console.log(getIcon(item.name))
});
```
# Browser Usage
```html

<script src="path-to/wci-crypto/dist/wci-crypto.js"></script>

<wci-crypto name="[icon-name]"></wci-crypto>
<wci-crypto name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-crypto>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)