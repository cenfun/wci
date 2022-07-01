# wci-lucide
Built from [lucide@0.72.0](https://github.com/lucide-icons/lucide)  

777 icons / size: 69.7KB / gzip: 51.5KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#lucide](https://cenfun.github.io/wci/#lucide)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-lucide
```
# API Usage
```js
import { icons, getIcon } from "wci-lucide";

const $icon = document.createElement("wci-lucide");
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

<script src="path-to/wci-lucide/dist/wci-lucide.js"></script>

<wci-lucide name="[icon-name]"></wci-lucide>
<wci-lucide name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-lucide>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)