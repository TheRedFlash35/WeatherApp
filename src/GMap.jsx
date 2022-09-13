import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%',
};



export default function GMap(props) {
  const { setPos } = props
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyB1VPRLYej4-rIKrNcBT9h3Ll83cenQq34"
  })
  // eslint-disable-next-line
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    
    navigator?.geolocation.getCurrentPosition(
      ({ coords: { latitude: lat, longitude: lng } }) => {
        const pos = { lat, lng };
        setPos(pos);
        this.setState({ defaultCenter: pos });
      }
    );

    const bounds = new window.google.maps.LatLngBounds(props.center || {lat: 46.5547, lng: 15.6459});
    map.fitBounds(bounds);
    setMap(map)
  }, [props.center, setPos])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat: props.lat, lng: props.lon}}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}
//export default React.memo(MyComponent);