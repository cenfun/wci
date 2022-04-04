# wci-grommet
Built from [grommet-icons@4.7.0](https://github.com/FortAwesome/Font-Awesome)  

615 icons / size: 120.8KB / gzip: 88.7KB  



# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/grommet/preview/](https://cenfun.github.io/wci/grommet/preview/)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-grommet
```
# API Usage
```js
import { icon, getIcon } from "wci-grommet";

const $icon = document.createElement("wci-grommet");
$icon.setAttribute("name", "[icon-name]");
$icon.setAttribute("size", "64px");
$icon.setAttribute("color", "#000");
document.body.appendChild($icon);

// get all icons
icon.list.forEach(item => {
    const ic = getIcon(item.id);
    console.log(ic)
});
```
# Browser Usage
```html

<script src="path-to/wci-grommet/dist/wci-grommet.js"></script>

<wci-grommet name="[icon-name]"></wci-grommet>
<wci-grommet name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-grommet>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)