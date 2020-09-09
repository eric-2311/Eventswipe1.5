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
          style={{ width: 900, height: 500, position: "relative" }}
          google={this.props.google}
          zoom={4}
          initialCenter={{ lat: 39.7392, lng: -101.9903 }}
          onClick={this.toggleMapClose}
        ></Map>
      );
    }
}

//Using Google API Wrapper to wrap mapContainer component with valid API key
export default GoogleApiWrapper({apiKey: keys.REACT_APP_GOOGLE_KEY})(mapContainer);