# wci-line
Built from [line-awesome@1.3.0](https://github.com/icons8/line-awesome)  

1544 icons / size: 511.2KB / gzip: 384.7KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#line](https://cenfun.github.io/wci/#line)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-line
```
# API Usage
```js
import { icons, getIcon } from "wci-line";

const $icon = document.createElement("wci-line");
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

<script src="path-to/wci-line/dist/wci-line.js"></script>

<wci-line name="[icon-name]"></wci-line>
<wci-line name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-line>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)