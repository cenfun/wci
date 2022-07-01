# wci-majest
Built from [majesticons@2.1.1](https://github.com/halfmage/majesticons)  

760 icons / size: 111.7KB / gzip: 83.1KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#majest](https://cenfun.github.io/wci/#majest)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-majest
```
# API Usage
```js
import { icons, getIcon } from "wci-majest";

const $icon = document.createElement("wci-majest");
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

<script src="path-to/wci-majest/dist/wci-majest.js"></script>

<wci-majest name="[icon-name]"></wci-majest>
<wci-majest name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-majest>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)