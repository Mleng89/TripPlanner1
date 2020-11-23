import mapboxgl from "mapbox-gl";
export function buildMarker(type, coords, map) {
  const newMarker = document.createElement("div");
  newMarker.style.width = "32px";
  newMarker.style.height = "39px";
  const iconUrls = {
    hotel:
      "url(https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg)",
    restaurant:
      "url(https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg)",
    activity:
      "url(https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg)",
    else:
      "url(https://upload.wikimedia.org/wikipedia/commons/8/88/Map_marker.svg)",
  };

  newMarker.style.backgroundImage = iconUrls[type]
    ? iconUrls[type]
    : iconUrls["else"];

  new mapboxgl.Marker(newMarker).setLngLat(coords).addTo(map);
}
