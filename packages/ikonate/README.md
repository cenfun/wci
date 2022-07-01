# wci-ikonate
Built from [ikonate@1.1.1](https://github.com/mikolajdobrucki/ikonate)  

283 icons / size: 30.1KB / gzip: 21.5KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#ikonate](https://cenfun.github.io/wci/#ikonate)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-ikonate
```
# API Usage
```js
import { icons, getIcon } from "wci-ikonate";

const $icon = document.createElement("wci-ikonate");
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

<script src="path-to/wci-ikonate/dist/wci-ikonate.js"></script>

<wci-ikonate name="[icon-name]"></wci-ikonate>
<wci-ikonate name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-ikonate>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)