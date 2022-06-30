# wci-blueprint
Built from [@blueprintjs/icons@4.3.0](https://github.com/palantir/blueprint)  

556 icons / size: 130.2KB / gzip: 97.0KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#blueprint](https://cenfun.github.io/wci/#blueprint)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-blueprint
```
# API Usage
```js
import { icon, getIcon } from "wci-blueprint";

const $icon = document.createElement("wci-blueprint");
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

<script src="path-to/wci-blueprint/dist/wci-blueprint.js"></script>

<wci-blueprint name="[icon-name]"></wci-blueprint>
<wci-blueprint name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-blueprint>
```
see [public/index.html](public/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)