# wci-carbon
Built from [@carbon/icons@11.0.2](https://github.com/carbon-design-system/carbon)  

1914 icons / size: 331.1KB / gzip: 247.6KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#carbon](https://cenfun.github.io/wci/#carbon)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-carbon
```
# API Usage
```js
import { icon, getIcon } from "wci-carbon";

const $icon = document.createElement("wci-carbon");
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

<script src="path-to/wci-carbon/dist/wci-carbon.js"></script>

<wci-carbon name="[icon-name]"></wci-carbon>
<wci-carbon name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-carbon>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)