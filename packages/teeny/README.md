# wci-teeny
Built from [teenyicons@0.4.1](https://github.com/teenyicons/teenyicons)  

1200 icons / size: 200.3KB / gzip: 148.8KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#teeny](https://cenfun.github.io/wci/#teeny)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-teeny
```
# API Usage
```js
import { icon, getIcon } from "wci-teeny";

const $icon = document.createElement("wci-teeny");
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

<script src="path-to/wci-teeny/dist/wci-teeny.js"></script>

<wci-teeny name="[icon-name]"></wci-teeny>
<wci-teeny name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-teeny>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)