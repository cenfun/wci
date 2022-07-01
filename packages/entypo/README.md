# wci-entypo
Built from [entypo@2.2.1](https://github.com/hypermodules/entypo)  

411 icons / size: 118.6KB / gzip: 88.4KB  



# Screenshot
![screenshot](public/screenshot.png)

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
import { icons, getIcon } from "wci-entypo";

const $icon = document.createElement("wci-entypo");
$icon.setAttribute("name", "[icon-name]");
$icon.setAttribute("size", "64px");
$icon.setAttribute("color", "#000");
document.body.appendChild($icon);

// get all icons
icons.forEach(item => {
    console.log(getIcon(item.name))
});
```
# Browser Usage
```html

<script src="path-to/wci-entypo/dist/wci-entypo.js"></script>

<wci-entypo name="[icon-name]"></wci-entypo>
<wci-entypo name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-entypo>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)