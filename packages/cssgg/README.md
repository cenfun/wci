# wci-cssgg
Built from [css.gg@2.0.0](https://github.com/astrit/css.gg)  

704 icons / size: 92.5KB / gzip: 66.9KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/cssgg/preview/](https://cenfun.github.io/wci/cssgg/preview/)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-cssgg
```
# API Usage
```js
import { icon, getIcon } from "wci-cssgg";

const $icon = document.createElement("wci-cssgg");
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

<script src="path-to/wci-cssgg/dist/wci-cssgg.js"></script>

<wci-cssgg name="[icon-name]"></wci-cssgg>
<wci-cssgg name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-cssgg>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)