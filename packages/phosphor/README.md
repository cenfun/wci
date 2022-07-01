# wci-phosphor
Built from [phosphor-icons@1.4.2](https://github.com/phosphor-icons/phosphor-icons)  

5235 icons / size: 896.5KB / gzip: 674.7KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#phosphor](https://cenfun.github.io/wci/#phosphor)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-phosphor
```
# API Usage
```js
import { icons, getIcon } from "wci-phosphor";

const $icon = document.createElement("wci-phosphor");
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

<script src="path-to/wci-phosphor/dist/wci-phosphor.js"></script>

<wci-phosphor name="[icon-name]"></wci-phosphor>
<wci-phosphor name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-phosphor>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)