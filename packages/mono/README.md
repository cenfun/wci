# wci-mono
Built from [mono-icons@1.3.1](https://github.com/mono-company/mono-icons)  

180 icons / size: 34.5KB / gzip: 24.9KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#mono](https://cenfun.github.io/wci/#mono)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-mono
```
# API Usage
```js
import { icons, getIcon } from "wci-mono";

const $icon = document.createElement("wci-mono");
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

<script src="path-to/wci-mono/dist/wci-mono.js"></script>

<wci-mono name="[icon-name]"></wci-mono>
<wci-mono name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-mono>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)