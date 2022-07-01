# wci-uiw
Built from [@uiw/icons@2.6.7](https://github.com/uiwjs/icons)  

214 icons / size: 84.6KB / gzip: 62.7KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#uiw](https://cenfun.github.io/wci/#uiw)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-uiw
```
# API Usage
```js
import { icons, getIcon } from "wci-uiw";

const $icon = document.createElement("wci-uiw");
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

<script src="path-to/wci-uiw/dist/wci-uiw.js"></script>

<wci-uiw name="[icon-name]"></wci-uiw>
<wci-uiw name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-uiw>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)