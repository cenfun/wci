# wci-feather
Built from [feather-icons@4.29.0](https://github.com/feathericons/feather)  

287 icons / size: 33.2KB / gzip: 22.3KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#feather](https://cenfun.github.io/wci/#feather)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-feather
```
# API Usage
```js
import { icon, getIcon } from "wci-feather";

const $icon = document.createElement("wci-feather");
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

<script src="path-to/wci-feather/dist/wci-feather.js"></script>

<wci-feather name="[icon-name]"></wci-feather>
<wci-feather name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-feather>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)