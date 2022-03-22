# wci-hero
Built from [heroicons@1.0.6](https://github.com/tailwindlabs/heroicons)  

460 icons / size: 63.0KB / gzip: 45.0KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/hero/preview/](https://cenfun.github.io/wci/hero/preview/)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-hero
```
# API Usage
```js
import { icon, getIcon } from "wci-hero";

const $icon = document.createElement("wci-hero");
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

<script src="path-to/wci-hero/dist/wci-hero.js"></script>

<wci-hero name="[icon-name]"></wci-hero>
<wci-hero name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-hero>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)