# wci-typ
Built from [typicons.font@2.1.2](https://github.com/stephenhutchings/typicons.font)  

336 icons / size: 108.0KB / gzip: 80.2KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#typ](https://cenfun.github.io/wci/#typ)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-typ
```
# API Usage
```js
import { icon, getIcon } from "wci-typ";

const $icon = document.createElement("wci-typ");
$icon.setAttribute("name", "[icon-name]");
$icon.setAttribute("size", "64px");
$icon.setAttribute("color", "#000");
document.body.appendChild($icon);

// get all icons
icon.list.forEach(item => {
    const ic = getIcon(item.id);
    console.log(ic)
});
```
# Browser Usage
```html

<script src="path-to/wci-typ/dist/wci-typ.js"></script>

<wci-typ name="[icon-name]"></wci-typ>
<wci-typ name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-typ>
```
see [public/index.html](public/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)