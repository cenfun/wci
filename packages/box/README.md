# wci-box
Built from [boxicons@2.1.2](https://github.com/atisawd/boxicons)  

1600 icons / size: 314.1KB / gzip: 236.3KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#box](https://cenfun.github.io/wci/#box)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-box
```
# API Usage
```js
import { icons, getIcon } from "wci-box";

const $icon = document.createElement("wci-box");
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

<script src="path-to/wci-box/dist/wci-box.js"></script>

<wci-box name="[icon-name]"></wci-box>
<wci-box name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-box>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)