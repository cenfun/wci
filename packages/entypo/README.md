# wci-entypo
Built from [entypo@2.2.1](https://github.com/hypermodules/entypo)  

411 icons / size: 122.7KB / gzip: 90.2KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#entypo](https://cenfun.github.io/wci/#entypo)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-entypo
```
# API Usage
```js
import { icon, getIcon } from "wci-entypo";

const $icon = document.createElement("wci-entypo");
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

<script src="path-to/wci-entypo/dist/wci-entypo.js"></script>

<wci-entypo name="[icon-name]"></wci-entypo>
<wci-entypo name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-entypo>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)