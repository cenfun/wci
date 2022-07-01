# wci-flat
Built from [flat-color-icons@1.1.0](https://github.com/icons8/flat-color-icons)  

329 icons / size: 88.4KB / gzip: 65.3KB  

Fixed Color

# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#flat](https://cenfun.github.io/wci/#flat)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-flat
```
# API Usage
```js
import { icons, getIcon } from "wci-flat";

const $icon = document.createElement("wci-flat");
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

<script src="path-to/wci-flat/dist/wci-flat.js"></script>

<wci-flat name="[icon-name]"></wci-flat>
<wci-flat name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-flat>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)