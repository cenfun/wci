# wci-jam
Built from [jam-icons@2.0.0](https://github.com/michaelampr/jam)  

896 icons / size: 206.1KB / gzip: 145.2KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#jam](https://cenfun.github.io/wci/#jam)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-jam
```
# API Usage
```js
import { icon, getIcon } from "wci-jam";

const $icon = document.createElement("wci-jam");
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

<script src="path-to/wci-jam/dist/wci-jam.js"></script>

<wci-jam name="[icon-name]"></wci-jam>
<wci-jam name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-jam>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)