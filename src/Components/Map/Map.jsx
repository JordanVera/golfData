import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import SpinnerCustom from '../Spinner.js';
import GOOGLE_MAPS_KEY from '../../config/config.js';

export default function Map({ events, loading }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: GOOGLE_MAPS_KEY,
  });

  return !isLoaded ? (
    <SpinnerCustom />
  ) : (
    <>
      <GoogleMap
        zoom={3}
        center={{ lat: 39.5, lng: -98.5 }}
        mapContainerClassName="scatterMap"
      >
        {events.map((event, i) => (
          <Marker
            key={i + 1}
            position={{ lat: event.lat, lng: event.long }}
            radius={1000}
            title={`event: ${event.event_name} \ncourse: ${event.course} \nstart: ${event.start_date}`}
            opacity={0.8}
          />
        ))}
      </GoogleMap>
    </>
  );
}
