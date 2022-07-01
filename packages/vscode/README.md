# wci-vscode
Built from [@vscode/codicons@0.0.31](https://github.com/microsoft/vscode-codicons)  

411 icons / size: 112.7KB / gzip: 83.9KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#vscode](https://cenfun.github.io/wci/#vscode)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-vscode
```
# API Usage
```js
import { icons, getIcon } from "wci-vscode";

const $icon = document.createElement("wci-vscode");
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

<script src="path-to/wci-vscode/dist/wci-vscode.js"></script>

<wci-vscode name="[icon-name]"></wci-vscode>
<wci-vscode name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-vscode>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)