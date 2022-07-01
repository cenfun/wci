# wci-typ
Built from [typicons.font@2.1.2](https://github.com/stephenhutchings/typicons.font)  

336 icons / size: 106.7KB / gzip: 79.3KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#typ](https://cenfun.github.io/wci/#typ)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-typ
```
# API Usage
```js
import { icons, getIcon } from "wci-typ";

const $icon = document.createElement("wci-typ");
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

<script src="path-to/wci-typ/dist/wci-typ.js"></script>

<wci-typ name="[icon-name]"></wci-typ>
<wci-typ name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-typ>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)