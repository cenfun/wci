# wci-feather
Built from [feather-icons@4.29.0](https://github.com/feathericons/feather)  

287 icons / size: 29.0KB / gzip: 20.7KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#feather](https://cenfun.github.io/wci/#feather)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-feather
```
# API Usage
```js
import { icons, getIcon } from "wci-feather";

const $icon = document.createElement("wci-feather");
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

<script src="path-to/wci-feather/dist/wci-feather.js"></script>

<wci-feather name="[icon-name]"></wci-feather>
<wci-feather name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-feather>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)