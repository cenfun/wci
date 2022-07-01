# wci-fluent
Built from [@fluentui/svg-icons@1.1.174](https://github.com/microsoft/fluentui-system-icons)  

4003 icons / size: 737.9KB / gzip: 555.2KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#fluent](https://cenfun.github.io/wci/#fluent)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-fluent
```
# API Usage
```js
import { icons, getIcon } from "wci-fluent";

const $icon = document.createElement("wci-fluent");
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

<script src="path-to/wci-fluent/dist/wci-fluent.js"></script>

<wci-fluent name="[icon-name]"></wci-fluent>
<wci-fluent name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-fluent>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)