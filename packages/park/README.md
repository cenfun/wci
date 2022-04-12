# wci-park
Built from [@icon-park/svg@1.3.5](https://github.com/bytedance/IconPark)  

2437 icons / size: 330.0KB / gzip: 246.7KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#park](https://cenfun.github.io/wci/#park)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-park
```
# API Usage
```js
import { icon, getIcon } from "wci-park";

const $icon = document.createElement("wci-park");
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

<script src="path-to/wci-park/dist/wci-park.js"></script>

<wci-park name="[icon-name]"></wci-park>
<wci-park name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-park>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)