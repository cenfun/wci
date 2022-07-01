# wci-awesome
Built from [@fortawesome/free-solid-svg-icons@6.1.1](https://github.com/FortAwesome/Font-Awesome)  

1385 icons / size: 468.3KB / gzip: 352.5KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#awesome](https://cenfun.github.io/wci/#awesome)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-awesome
```
# API Usage
```js
import { icons, getIcon } from "wci-awesome";

const $icon = document.createElement("wci-awesome");
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

<script src="path-to/wci-awesome/dist/wci-awesome.js"></script>

<wci-awesome name="[icon-name]"></wci-awesome>
<wci-awesome name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-awesome>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)