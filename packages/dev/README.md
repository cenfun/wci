# wci-dev
Built from [devicons@1.8.0](https://github.com/vorillaz/devicons)  

192 icons / size: 234.2KB / gzip: 166.6KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#dev](https://cenfun.github.io/wci/#dev)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-dev
```
# API Usage
```js
import { icon, getIcon } from "wci-dev";

const $icon = document.createElement("wci-dev");
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

<script src="path-to/wci-dev/dist/wci-dev.js"></script>

<wci-dev name="[icon-name]"></wci-dev>
<wci-dev name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-dev>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)