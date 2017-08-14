import React from 'react';


const getCoordsObj = latLng => ({
  lat: latLng.lat(),
  lng: latLng.lng()
});

const mapOptions = {
  center: {
    lat: 37.773972,
    lng: -122.431297
  }, // San Francisco coords
  zoom: 13,
  mapTypeId: 'roadmap'
};

class Map extends React.Component {
  componentDidMount() {
    const elem = document.getElementById('map');
    const map = new google.maps.Map(elem, mapOptions);

    var input = document.getElementById('input');
        var searchBox = new google.maps.places.SearchBox(input);
        map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

        map.addListener('bounds_changed', function() {
          searchBox.setBounds(map.getBounds());
        });

        var markers = [];

        searchBox.addListener('places_changed', function() {
          var places = searchBox.getPlaces();

          markers.forEach(function(marker) {
            marker.setMap(null);
          });
          markers = [];

          var bounds = new google.maps.LatLngBounds();
          places.forEach(function(place) {

            var icon = {
              url: place.icon,
              size: new google.maps.Size(71, 71),
              origin: new google.maps.Point(0, 0),
              anchor: new google.maps.Point(17, 34),
              scaledSize: new google.maps.Size(25, 25)
            };

            markers.push(new google.maps.Marker({
              map: map,
              icon: icon,
              title: place.name,
              position: place.geometry.location,
              animation: google.maps.Animation.DROP
            }));

            if (place.geometry.viewport) {
              bounds.union(place.geometry.viewport);
            } else {
              bounds.extend(place.geometry.location);
            }
          });
          map.fitBounds(bounds);
        });
  }

  render() {
    return (
      <div className="map-container">
        <input id="input"
          className="controls"
          type="text"
          placeholder="Search Google Maps" />
        <div id="map" ref="map">
          Map
        </div>
      </div>
    );
  }
}

export default Map;
