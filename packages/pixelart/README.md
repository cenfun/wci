# wci-pixelart
Built from [pixelarticons@1.5.0](https://github.com/halfmage/pixelarticons)  

460 icons / size: 36.7KB / gzip: 26.5KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#pixelart](https://cenfun.github.io/wci/#pixelart)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-pixelart
```
# API Usage
```js
import { icons, getIcon } from "wci-pixelart";

const $icon = document.createElement("wci-pixelart");
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

<script src="path-to/wci-pixelart/dist/wci-pixelart.js"></script>

<wci-pixelart name="[icon-name]"></wci-pixelart>
<wci-pixelart name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-pixelart>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)