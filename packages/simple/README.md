# wci-simple
Built from [simple-icons@6.18.0](https://github.com/simple-icons/simple-icons)  

2228 icons / size: 1.8MB / gzip: 1.4MB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#simple](https://cenfun.github.io/wci/#simple)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-simple
```
# API Usage
```js
import { icon, getIcon } from "wci-simple";

const $icon = document.createElement("wci-simple");
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

<script src="path-to/wci-simple/dist/wci-simple.js"></script>

<wci-simple name="[icon-name]"></wci-simple>
<wci-simple name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-simple>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)