# wci-akar
Built from [akar-icons@1.9.18](https://github.com/artcoholic/akar-icons)  

385 icons / size: 78.2KB / gzip: 57.8KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#akar](https://cenfun.github.io/wci/#akar)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-akar
```
# API Usage
```js
import { icons, getIcon } from "wci-akar";

const $icon = document.createElement("wci-akar");
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

<script src="path-to/wci-akar/dist/wci-akar.js"></script>

<wci-akar name="[icon-name]"></wci-akar>
<wci-akar name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-akar>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)