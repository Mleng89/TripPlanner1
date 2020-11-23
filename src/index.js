import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoibWxlbmc4OSIsImEiOiJja2h1c2t5d20wNDlpMzBwZ2ZoYTR5bDVzIn0.d5mfJLDv67gdKOqSkatzlQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 12,
  style: "mapbox://styles/mapbox/streets-v10",
});

console.log("Hello world");
