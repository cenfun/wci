# wci-{id}
Built from [{packageNameVersion}]({packageUrl})  

{stats}  

{readme}

# Preview
![screenshot](preview/screenshot.png)

Online Page: [https://cenfun.github.io/wci/{id}/preview/](https://cenfun.github.io/wci/{id}/preview/)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-{id}
```
# API Usage
```js
import { icon, getIcon } from "wci-{id}";

const $icon = document.createElement("wci-{id}");
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

<script src="path-to/wci-{id}/dist/wci-{id}.js"></script>

<wci-{id} name="[icon-name]"></wci-{id}>
<wci-{id} name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-{id}>
```
see [preview/index.html](preview/index.html)

## Optimizing and Compression with [svg-to-symbol](https://github.com/cenfun/svg-to-symbol)
* Optimized with [svgo](https://github.com/svg/svgo)
* Removed repeated contents
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)