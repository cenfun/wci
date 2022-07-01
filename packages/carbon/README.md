# wci-carbon
Built from [@carbon/icons@11.5.0](https://github.com/carbon-design-system/carbon)  

1930 icons / size: 333.3KB / gzip: 250.7KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#carbon](https://cenfun.github.io/wci/#carbon)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-carbon
```
# API Usage
```js
import { icons, getIcon } from "wci-carbon";

const $icon = document.createElement("wci-carbon");
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

<script src="path-to/wci-carbon/dist/wci-carbon.js"></script>

<wci-carbon name="[icon-name]"></wci-carbon>
<wci-carbon name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-carbon>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)