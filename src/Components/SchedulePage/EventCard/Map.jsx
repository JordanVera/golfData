import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import SpinnerCustom from '../../Spinner';

export default function Map({ latitude, longitude }) {
  const center = useMemo(() => ({ lat: latitude, lng: longitude }), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_KEY,
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
