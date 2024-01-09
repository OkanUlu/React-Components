import React, { useEffect, useState, useRef } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const LeafletComponent = () => {
  const mapContainerRef = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-97.7431);
  const [lat, setLat] = useState(30.2672);
  const [zoom, setZoom] = useState(2);
  const [data, setData] = useState({
    type: "FeatureCollection",
    features: [],
  });
  const [load, loadData] = useState(true);

  useEffect(() => {
    const fetchEarthquakeData = async () => {
      const response = await fetch(
        "https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson"
      );
      if (load) {
        const data = await response.json();
        setData(data);
        loadData(false);
      }
    };

    map.current = L.map(mapContainerRef.current).setView([lat, lng], zoom);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        "&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors",
    }).addTo(map.current);

    var earthquakeMarkerOptions = {
      radius: 4,
      fillColor: "#FF0000",
      color: "#FFFFFF",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8,
    };

    var earthquakeLayer = L.geoJSON(data, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, earthquakeMarkerOptions);
      },
    }).addTo(map.current);

    map.current.on('tileload', fetchEarthquakeData);

    return () => {
      map.current.remove();
    };
  }, [lat, lng, zoom, data, load]);

  return (
    <div
      style={{
        width: "100%",
        height: "400px", // veya başka bir değer
      }}
      ref={mapContainerRef}
    />
  );
};

export default LeafletComponent;
