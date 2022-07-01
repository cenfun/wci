# wci-simple
Built from [simple-icons@7.3.0](https://github.com/simple-icons/simple-icons)  

2274 icons / size: 1.9MB / gzip: 1.4MB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#simple](https://cenfun.github.io/wci/#simple)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-simple
```
# API Usage
```js
import { icons, getIcon } from "wci-simple";

const $icon = document.createElement("wci-simple");
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

<script src="path-to/wci-simple/dist/wci-simple.js"></script>

<wci-simple name="[icon-name]"></wci-simple>
<wci-simple name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-simple>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)