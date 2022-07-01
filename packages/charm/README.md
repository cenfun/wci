# wci-charm
Built from [charm-icons@0.15.0](https://github.com/jaynewey/charm-icons)  

255 icons / size: 25.3KB / gzip: 17.8KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#charm](https://cenfun.github.io/wci/#charm)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-charm
```
# API Usage
```js
import { icons, getIcon } from "wci-charm";

const $icon = document.createElement("wci-charm");
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

<script src="path-to/wci-charm/dist/wci-charm.js"></script>

<wci-charm name="[icon-name]"></wci-charm>
<wci-charm name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-charm>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)