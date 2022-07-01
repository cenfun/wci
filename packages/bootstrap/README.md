# wci-bootstrap
Built from [bootstrap-icons@1.8.3](https://github.com/twbs/icons)  

1668 icons / size: 354.7KB / gzip: 266.9KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#bootstrap](https://cenfun.github.io/wci/#bootstrap)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-bootstrap
```
# API Usage
```js
import { icons, getIcon } from "wci-bootstrap";

const $icon = document.createElement("wci-bootstrap");
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

<script src="path-to/wci-bootstrap/dist/wci-bootstrap.js"></script>

<wci-bootstrap name="[icon-name]"></wci-bootstrap>
<wci-bootstrap name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-bootstrap>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)