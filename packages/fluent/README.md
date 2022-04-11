# wci-fluent
Built from [@fluentui/svg-icons@1.1.166](https://github.com/microsoft/fluentui-system-icons)  

3871 icons / size: 721.0KB / gzip: 540.7KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/fluent/preview/](https://cenfun.github.io/wci/fluent/preview/)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-fluent
```
# API Usage
```js
import { icon, getIcon } from "wci-fluent";

const $icon = document.createElement("wci-fluent");
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

<script src="path-to/wci-fluent/dist/wci-fluent.js"></script>

<wci-fluent name="[icon-name]"></wci-fluent>
<wci-fluent name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-fluent>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)