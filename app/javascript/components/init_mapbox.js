import mapboxgl from "mapbox-gl";

const apiKey =
  "pk.eyJ1IjoibWFsbG9yeS13aXR0d2VyIiwiYSI6ImNrdm04cXFvYTFkaXgybnRrOHZwd3V6OXQifQ.4A6aU7z25kZ4RpVIa2V47w";

mapboxgl.accessToken = apiKey;

const createMap = (coords) => {
  return new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v9",
    center: coords,
    zoom: 12,
  });
};

const addMarker = (map, coords) => {
  new mapboxgl.Marker().setLngLat(coords).addTo(map);
};

const manageLocation = (data) => {
  data.features.reverse().forEach((foundLoc) => {
    if (foundLoc.center) {
      const coords = foundLoc.center.slice(0, 2);
      const map = createMap(coords);
      addMarker(map, coords);
    }
  });
};

const initMapBox = () => {
  const place = "Lausanne";
  const queryURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json?access_token=${apiKey}`;
  fetch(queryURL)
    .then((r) => r.json())
    .then((d) => manageLocation(d));
};

export { initMapBox };
