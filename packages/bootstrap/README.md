# wci-bootstrap
Built from [bootstrap-icons@1.8.1](https://github.com/twbs/icons)  

1668 icons / size: 358.4KB / gzip: 268.3KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/bootstrap/preview/](https://cenfun.github.io/wci/bootstrap/preview/)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-bootstrap
```
# API Usage
```js
import { icon, getIcon } from "wci-bootstrap";

const $icon = document.createElement("wci-bootstrap");
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

<script src="path-to/wci-bootstrap/dist/wci-bootstrap.js"></script>

<wci-bootstrap name="[icon-name]"></wci-bootstrap>
<wci-bootstrap name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-bootstrap>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)