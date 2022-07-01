# wci-hero
Built from [heroicons@1.0.6](https://github.com/tailwindlabs/heroicons)  

460 icons / size: 59.2KB / gzip: 43.4KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#hero](https://cenfun.github.io/wci/#hero)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-hero
```
# API Usage
```js
import { icons, getIcon } from "wci-hero";

const $icon = document.createElement("wci-hero");
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

<script src="path-to/wci-hero/dist/wci-hero.js"></script>

<wci-hero name="[icon-name]"></wci-hero>
<wci-hero name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-hero>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)