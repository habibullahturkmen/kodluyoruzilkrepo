#### circleModule.js file
```js
const circleArea = (r) => {
    let area = Math.PI * (r * r);
    console.log(`Yarıçapı ${r} olan dairenin alanı ortalama ${Math.round(area)} oluyor.`);
}

const circleCircumference = (r) => {
    let circleCircumference = r * Math.PI * 2;
    console.log(`Yarıçapı ${r} olan dairenin çevresi ortalama ${Math.round(circleCircumference)} oluyor.`);
}

module.exports = { circleArea, circleCircumference }
```
#### index.js file
```js
const circle = require('./circleModule.js'); // imports circleModule

circle.circleArea(5);
circle.circleCircumference(5);
```