# wci-icomoon
Built from [icomoon-free-npm@0.0.0](https://github.com/Keyamoon/IcoMoon-Free)  

491 icons / size: 114.8KB / gzip: 85.5KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#icomoon](https://cenfun.github.io/wci/#icomoon)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-icomoon
```
# API Usage
```js
import { icons, getIcon } from "wci-icomoon";

const $icon = document.createElement("wci-icomoon");
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

<script src="path-to/wci-icomoon/dist/wci-icomoon.js"></script>

<wci-icomoon name="[icon-name]"></wci-icomoon>
<wci-icomoon name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-icomoon>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)