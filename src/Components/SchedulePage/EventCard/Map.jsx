import { useMemo } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import SpinnerCustom from '../../Spinner.js';
import GOOGLE_MAPS_KEY from '../../../config/config.js';

export default function Map({ latitude, longitude }) {
  const center = useMemo(() => ({ lat: latitude, lng: longitude }), []);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_KEY,
  });

  return !isLoaded ? (
    <SpinnerCustom />
  ) : (
    <GoogleMap
      zoom={10}
      center={{ lat: latitude, lng: longitude }}
      mapContainerClassName="map-container"
    >
      <Marker position={center} />
    </GoogleMap>
  );
}
