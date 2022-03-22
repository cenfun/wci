# wci-ant
Built from [@ant-design/icons-svg@4.2.1](https://github.com/ant-design/ant-design-icons)  

639 icons / size: 202.6KB / gzip: 150.6KB  

No "twotone" icons because custom colors are not supported

# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/ant/preview/](https://cenfun.github.io/wci/ant/preview/)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-ant
```
# API Usage
```js
import { icon, getIcon } from "wci-ant";

const $icon = document.createElement("wci-ant");
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

<script src="path-to/wci-ant/dist/wci-ant.js"></script>

<wci-ant name="[icon-name]"></wci-ant>
<wci-ant name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-ant>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)