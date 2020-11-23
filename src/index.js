import mapboxgl from "mapbox-gl";
import { buildMarker } from "./marker.js";
mapboxgl.accessToken =
  "pk.eyJ1IjoibWxlbmc4OSIsImEiOiJja2h1c2t5d20wNDlpMzBwZ2ZoYTR5bDVzIn0.d5mfJLDv67gdKOqSkatzlQ";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705],
  zoom: 14,
  style: "mapbox://styles/mapbox/streets-v10",
});

const marker1 = document.createElement("div");
marker1.style.width = "32px";
marker1.style.height = "39px";
marker1.style.backgroundImage =
  "url(https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg)";
new mapboxgl.Marker(marker1).setLngLat([-74.009, 40.705]).addTo(map);

buildMarker("hotel", [-74.009, 40.019], map);
buildMarker("restaurant", [-74.532, 40.705], map);
buildMarker("activity", [74.009, -40.705], map);
buildMarker("house", [-64.009, 40.705], map);
