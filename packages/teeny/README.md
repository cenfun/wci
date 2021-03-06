# wci-teeny
Built from [teenyicons@0.4.1](https://github.com/teenyicons/teenyicons)  

1200 icons / size: 195.9KB / gzip: 146.9KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#teeny](https://cenfun.github.io/wci/#teeny)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-teeny
```
# API Usage
```js
import { icons, getIcon } from "wci-teeny";

const $icon = document.createElement("wci-teeny");
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

<script src="path-to/wci-teeny/dist/wci-teeny.js"></script>

<wci-teeny name="[icon-name]"></wci-teeny>
<wci-teeny name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-teeny>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)