# wci-grommet
Built from [grommet-icons@4.7.0](https://github.com/FortAwesome/Font-Awesome)  

615 icons / size: 116.5KB / gzip: 86.8KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#grommet](https://cenfun.github.io/wci/#grommet)

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
import { icons, getIcon } from "wci-grommet";

const $icon = document.createElement("wci-grommet");
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

<script src="path-to/wci-grommet/dist/wci-grommet.js"></script>

<wci-grommet name="[icon-name]"></wci-grommet>
<wci-grommet name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-grommet>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)