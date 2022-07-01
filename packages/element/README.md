# wci-element
Built from [@element-plus/icons-svg@2.0.6](https://github.com/element-plus/element-plus-icons)  

283 icons / size: 63.6KB / gzip: 46.8KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#element](https://cenfun.github.io/wci/#element)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-element
```
# API Usage
```js
import { icons, getIcon } from "wci-element";

const $icon = document.createElement("wci-element");
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

<script src="path-to/wci-element/dist/wci-element.js"></script>

<wci-element name="[icon-name]"></wci-element>
<wci-element name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-element>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)