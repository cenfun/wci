# wci-line
Built from [line-awesome@1.3.0](https://github.com/icons8/line-awesome)  

1544 icons / size: 515.3KB / gzip: 386.3KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#line](https://cenfun.github.io/wci/#line)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-line
```
# API Usage
```js
import { icon, getIcon } from "wci-line";

const $icon = document.createElement("wci-line");
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

<script src="path-to/wci-line/dist/wci-line.js"></script>

<wci-line name="[icon-name]"></wci-line>
<wci-line name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-line>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)