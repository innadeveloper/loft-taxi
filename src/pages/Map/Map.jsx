import React from 'react';
import mapboxgl from 'mapbox-gl';

export default class Map extends React.Component {
  map = null;
  mapContainer = React.createRef();

  componentDidMount() {
    mapboxgl.accessToken =
    "pk.eyJ1IjoiaW5uYW11YyIsImEiOiJja285MGR6NHUwZGJ2MnNxbXZiYjd1cGRvIn0.FWzh15MRI-uHyPeNOCuVnQ";

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current,
      style: 'mapbox://styles/mapbox/basic-v9',
      center: [30.3056504, 59.9429126], 
      zoom: 10,
    });
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return (
      <div className="map-wrapper">
        <div data-testid="map" className="map" ref={this.mapContainer}></div>
      </div>
    );
  }
}