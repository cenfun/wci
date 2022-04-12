# wci-vscode
Built from [@vscode/codicons@0.0.29](https://github.com/microsoft/vscode-codicons)  

408 icons / size: 116.9KB / gzip: 85.7KB  



# Preview
![screenshot](preview/screenshot.png)

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
import { icon, getIcon } from "wci-vscode";

const $icon = document.createElement("wci-vscode");
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

<script src="path-to/wci-vscode/dist/wci-vscode.js"></script>

<wci-vscode name="[icon-name]"></wci-vscode>
<wci-vscode name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-vscode>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)