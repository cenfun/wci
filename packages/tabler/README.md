# wci-tabler
Built from [@tabler/icons@1.72.0](https://github.com/tabler/tabler-icons)  

2052 icons / size: 182.3KB / gzip: 136.5KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#tabler](https://cenfun.github.io/wci/#tabler)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-tabler
```
# API Usage
```js
import { icons, getIcon } from "wci-tabler";

const $icon = document.createElement("wci-tabler");
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

<script src="path-to/wci-tabler/dist/wci-tabler.js"></script>

<wci-tabler name="[icon-name]"></wci-tabler>
<wci-tabler name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-tabler>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)