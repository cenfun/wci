# wci-cssgg
Built from [css.gg@2.0.0](https://github.com/astrit/css.gg)  

704 icons / size: 88.3KB / gzip: 65.2KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#cssgg](https://cenfun.github.io/wci/#cssgg)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-cssgg
```
# API Usage
```js
import { icons, getIcon } from "wci-cssgg";

const $icon = document.createElement("wci-cssgg");
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

<script src="path-to/wci-cssgg/dist/wci-cssgg.js"></script>

<wci-cssgg name="[icon-name]"></wci-cssgg>
<wci-cssgg name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-cssgg>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)