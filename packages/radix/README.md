# wci-radix
Built from [@radix-ui/react-icons@1.1.0](https://github.com/radix-ui/icons)  

318 icons / size: 83.6KB / gzip: 60.6KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#radix](https://cenfun.github.io/wci/#radix)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-radix
```
# API Usage
```js
import { icon, getIcon } from "wci-radix";

const $icon = document.createElement("wci-radix");
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

<script src="path-to/wci-radix/dist/wci-radix.js"></script>

<wci-radix name="[icon-name]"></wci-radix>
<wci-radix name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-radix>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)