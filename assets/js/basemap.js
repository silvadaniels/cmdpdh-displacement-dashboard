/* Shared by the current dashboard and the legacy root entry point. */
const OpenFreeMap = (() => {
  const styleUrl = "https://tiles.openfreemap.org/styles/positron";
  const attribution = '<a href="https://openfreemap.org/">OpenFreeMap</a> <a href="https://www.openmaptiles.org/">© OpenMapTiles</a> Data from <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

  async function loadStyles() {
    const response = await fetch(styleUrl);
    if (!response.ok) throw new Error("Unable to load OpenFreeMap style");
    const style = await response.json();
    // Keep labels above Leaflet polygons, with a transparent label canvas.
    return {
      background: {...style, layers: style.layers.filter(layer => layer.type !== "symbol")},
      labels: {...style, layers: style.layers.filter(layer => layer.type === "symbol")}
    };
  }

  function layer(style, pane) {
    return L.maplibreGL({
      style: structuredClone(style), pane, interactive: false,
      attributionControl: {customAttribution: attribution}
    });
  }

  return {loadStyles, layer};
})();
