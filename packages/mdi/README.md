# wci-mdi
Built from [@mdi/svg@6.8.96](https://github.com/Templarian/MaterialDesign-SVG)  

6896 icons / size: 1.0MB / gzip: 789.3KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#mdi](https://cenfun.github.io/wci/#mdi)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-mdi
```
# API Usage
```js
import { icons, getIcon } from "wci-mdi";

const $icon = document.createElement("wci-mdi");
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

<script src="path-to/wci-mdi/dist/wci-mdi.js"></script>

<wci-mdi name="[icon-name]"></wci-mdi>
<wci-mdi name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-mdi>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)