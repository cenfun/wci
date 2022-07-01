# wci-radix
Built from [@radix-ui/react-icons@1.1.1](https://github.com/radix-ui/icons)  

318 icons / size: 79.1KB / gzip: 58.5KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#radix](https://cenfun.github.io/wci/#radix)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-radix
```
# API Usage
```js
import { icons, getIcon } from "wci-radix";

const $icon = document.createElement("wci-radix");
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

<script src="path-to/wci-radix/dist/wci-radix.js"></script>

<wci-radix name="[icon-name]"></wci-radix>
<wci-radix name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-radix>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)