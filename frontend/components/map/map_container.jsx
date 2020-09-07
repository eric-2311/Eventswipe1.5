import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import keys from '../../src/confg/keys';

class mapContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    //Basic Google Maps component
    render() {
      return (
        <Map
          style={{ width: 800, height: 500, position: "relative" }}
          google={this.props.google}
          zoom={12}
          initialCenter={{ lat: 40.752055, lng: -73.933856 }}
          onClick={this.toggleMapClose}
        ></Map>
      );
    }
}

export default GoogleApiWrapper({apiKey: keys.REACT_APP_GOOGLE_KEY})(mapContainer);