# wci-oct
Built from [@primer/octicons@17.3.0](https://github.com/primer/octicons)  

506 icons / size: 128.2KB / gzip: 95.6KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#oct](https://cenfun.github.io/wci/#oct)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-oct
```
# API Usage
```js
import { icons, getIcon } from "wci-oct";

const $icon = document.createElement("wci-oct");
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

<script src="path-to/wci-oct/dist/wci-oct.js"></script>

<wci-oct name="[icon-name]"></wci-oct>
<wci-oct name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-oct>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)