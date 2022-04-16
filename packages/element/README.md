# wci-element
Built from [@element-plus/icons-svg@1.1.4](https://github.com/element-plus/element-plus-icons)  

283 icons / size: 67.9KB / gzip: 48.8KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#element](https://cenfun.github.io/wci/#element)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-element
```
# API Usage
```js
import { icon, getIcon } from "wci-element";

const $icon = document.createElement("wci-element");
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

<script src="path-to/wci-element/dist/wci-element.js"></script>

<wci-element name="[icon-name]"></wci-element>
<wci-element name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-element>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)