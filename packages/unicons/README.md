# wci-unicons
Built from [@iconscout/unicons@4.0.1](https://github.com/Iconscout/unicons)  

1395 icons / size: 264.2KB / gzip: 198.4KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#unicons](https://cenfun.github.io/wci/#unicons)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-unicons
```
# API Usage
```js
import { icons, getIcon } from "wci-unicons";

const $icon = document.createElement("wci-unicons");
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

<script src="path-to/wci-unicons/dist/wci-unicons.js"></script>

<wci-unicons name="[icon-name]"></wci-unicons>
<wci-unicons name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-unicons>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)