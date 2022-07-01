# wci-ionic
Built from [ionicons@6.0.2](https://github.com/ionic-team/ionicons)  

918 icons / size: 246.7KB / gzip: 185.3KB  

No sharp icons

# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#ionic](https://cenfun.github.io/wci/#ionic)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-ionic
```
# API Usage
```js
import { icons, getIcon } from "wci-ionic";

const $icon = document.createElement("wci-ionic");
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

<script src="path-to/wci-ionic/dist/wci-ionic.js"></script>

<wci-ionic name="[icon-name]"></wci-ionic>
<wci-ionic name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-ionic>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)