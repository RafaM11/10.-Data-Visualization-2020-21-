# Spain COVID-19: Mandatory Task.

This task consist in comparing the initial and the last 14 days COVID-10 cases in Spain using some D3.js functionalities. The visualization is a map where COVID-19 cases are represented by the size of the circles. Also, this visualization adds two buttons in order to choose between the initial and the last 14 days cases.

## 1. Requirements.
Firstly, we have to copy all the contents of the 00-boilerplate folder (previous exercise than this one) and execute the following command.
```js
npm install
```
We need more libraries in order to work with maps and JSON files. Use the following code to install the rest of the needed packages:
```js
npm install topojson-client --save
npm install @types/topojson-client --save-dev
npm install @types/node --save-dev
```
Now we have to load the map of Spain. We are going to use a JSON file which contains the coordinates of each region:
```js
export const latLongCommunities = [
  {
    name: "Comunidad de Madrid",
    long: -3.70256,
    lat: 40.4165,
  },
  {
    name: "Andalucía",
    long: -4.5,
    lat: 37.6,
  },
  {
    name: "Comunidad Valenciana",
    long: -0.37739,
    lat: 39.45975,
  },
  {
    name: "Región de Murcia",
    long: -1.13004,
    lat: 37.98704,
  },
  {
    name: "Extremadura",
    long: -6.16667,
    lat: 39.16667,
  },
  {
    name: "Cataluña",
    long: 1.86768,
    lat: 41.82046,
  },
  {
    name: "País Vasco",
    long: -2.75,
    lat: 43.0,
  },
  {
    name: "Cantabria",
    long: -4.03333,
    lat: 43.2,
  },
  {
    name: "Principado de Asturias",
    long: -5.86112,
    lat: 43.36662,
  },
  {
    name: "Galicia",
    long: -7.86621,
    lat: 42.75508,
  },
  {
    name: "Aragón",
    long: -1.0,
    lat: 41.0,
  },
  {
    name: "Castilla y León",
    long: -4.45,
    lat: 41.383333,
  },
  {
    name: "Castilla-La Mancha",
    long: -3.000033,
    lat: 39.500011,
  },
  {
    name: "Islas Canarias",
    long: -15.5,
    lat: 28.0,
  },
  {
    name: "Islas Baleares",
    long: 2.52136,
    lat: 39.18969,
  },
  {
    name: "Comunidad Foral de Navarra",
    long: -1.65,
    lat: 42.816666,
  },
  {
    name: "La Rioja",
    long: -2.445556,
    lat: 42.465,
  },
];
```

Our HTML index file looks like that (note that we have added the two buttons using a div):
```html
<html>
  <head>
    <link rel="stylesheet" type="text/css" href="./map.css" />
  </head>
  <div>
    <button id="Inicio">Initial Cases</button>
    <button id="Final">Last 14 days cases</button>
  </div>
  <body>
    <script src="./index.ts"></script>
  </body>
</html>
```
And finally we have used a stats file which gets the initial and the current COVID-19 stats.

## 2. Index file.

First, we have to import the needed libraries:

```js
import * as d3 from "d3";
import { interpolateMagma } from "d3";
import { on } from "node:events";
import * as topojson from "topojson-client";
const spainjson = require("./spain.json");
const d3Composite = require("d3-composite-projections");
import { latLongCommunities } from "./communities";
import { statsIni, statsLast, ResultEntry } from "./covid";
```

Once imported, let's analyse the main functions.

This function return the maximum number of cases per region.
```js
const maxAffected = (s: ResultEntry[]) => {
  const max = s.reduce((max, item) => (item.value > max ? item.value : max), 0);
  return max;
};
```
This two functions are used to represent the radius size of each region according to the number of COVID-19 cases.
```js
const calculateRadiusBasedOnAffectedCases = (
  comunidad: string,
  s: ResultEntry[]
) => {
  const entry = s.find((item) => item.name === comunidad);

  const affectedRadiusScale = d3
    .scaleLinear()
    .domain([0, maxAffected(s)])
    .range([0, 50]);

  return entry ? affectedRadiusScale(entry.value) : 0;
};
```

This function is used to set the scale of the projection.
```js
const aProjection = d3Composite
  .geoConicConformalSpain()
  .scale(3300)
  .translate([500, 400]);
const geoPath = d3.geoPath().projection(aProjection);

const geojson = topojson.feature(spainjson, spainjson.objects.ESP_adm1);
```
Now it is time to set the size and the colour of the background. Also, using the last function we can give an initial state to our projection.
```js
const svg = d3
  .select("body")
  .append("svg")
  .attr("width", 1024)
  .attr("height", 800)
  .attr("style", "background-color: #FBFAF0");

svg
  .selectAll("path")
  .data(geojson["features"])
  .enter()
  .append("path")
  .attr("class", "country")
  .attr("d", geoPath as any);

svg
  .selectAll("circle")
  .data(latLongCommunities)
  .enter()
  .append("circle")
  .attr("class", "affected-marker")
  .attr("r", (d) => calculateRadiusBasedOnAffectedCases(d.name, statsIni))
  .attr("cx", (d) => aProjection([d.long, d.lat])[0])
  .attr("cy", (d) => aProjection([d.long, d.lat])[1]);
```

Create a new function to update the radius of the circles when the button is clicked:

```js
const updateRadius = (data: ResultEntry[]) => {
  d3.selectAll("circle")
    .data(latLongCommunities)
    .transition()
    .duration(500)
    .attr("class", "affected-marker")
    .attr("r", (d) => calculateRadiusBasedOnAffectedCases(d.name, data))
    .attr("cx", (d) => aProjection([d.long, d.lat])[0])
    .attr("cy", (d) => aProjection([d.long, d.lat])[1]);
};
```
And finally, let's link each button with its respective functionality:
```js
document
  .getElementById("Inicio")
  .addEventListener("click", function handlResultsIni() {
    updateRadius(statsIni);
  });

document
  .getElementById("Final")
  .addEventListener("click", function handlResultsFinal() {
    updateRadius(statsLast);
  });
```



