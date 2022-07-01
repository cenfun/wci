# wci-weather
Built from [weather-icons-npm@10.0.0](https://github.com/erikflowers/weather-icons)  

219 icons / size: 140.5KB / gzip: 104.8KB  



# Screenshot
![screenshot](public/screenshot.png)

Online Page: [https://cenfun.github.io/wci/#weather](https://cenfun.github.io/wci/#weather)

# Features
* Web Components
* Vector SVG Icons 
* Customize Size/Color/Background/Radius
* High Compressed Bundle
# Installation
```sh
npm install wci-weather
```
# API Usage
```js
import { icons, getIcon } from "wci-weather";

const $icon = document.createElement("wci-weather");
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

<script src="path-to/wci-weather/dist/wci-weather.js"></script>

<wci-weather name="[icon-name]"></wci-weather>
<wci-weather name="[icon-name]" size="64px" color="#000" style="background:#f5f5f5;"></wci-weather>
```
see [public/index.html](public/index.html)

## Minified with [svg-minifier](https://github.com/cenfun/svg-minifier)
* Optimized with [svgo](https://github.com/svg/svgo)
* Compressed with [lz-string](https://github.com/pieroxy/lz-string)