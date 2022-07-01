# wci-remix
Built from [remixicon@2.5.0](https://github.com/Remix-Design/RemixIcon)  

2271 icons / size: 316.1KB / gzip: 237.8KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#remix](https://cenfun.github.io/wci/#remix)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-remix
```
# API Usage
```js
import { icons, getIcon } from "wci-remix";

const $icon = document.createElement("wci-remix");
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

<script src="path-to/wci-remix/dist/wci-remix.js"></script>

<wci-remix name="[icon-name]"></wci-remix>
<wci-remix name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-remix>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)