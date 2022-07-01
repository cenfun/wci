# wci-dev
Built from [devicons@1.8.0](https://github.com/vorillaz/devicons)  

192 icons / size: 219.7KB / gzip: 164.9KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#dev](https://cenfun.github.io/wci/#dev)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-dev
```
# API Usage
```js
import { icons, getIcon } from "wci-dev";

const $icon = document.createElement("wci-dev");
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

<script src="path-to/wci-dev/dist/wci-dev.js"></script>

<wci-dev name="[icon-name]"></wci-dev>
<wci-dev name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-dev>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)