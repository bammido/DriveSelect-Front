import { DirectionsRenderer, GoogleMap, useLoadScript } from "@react-google-maps/api";
import { useEffect, useState } from "react";
import secondsToHoursMinutes from "../../helpers/functions/secondsToHoursMinutes";
import useUpdateAspectRatio from "./hooks/usUpdateAspectRatio";

interface IDirectionsProps {
    origin: string;
    destination: string;
    distance: number;
    duration: string;
}

export default function Directions({distance, duration, origin, destination}: IDirectionsProps) {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_API_KEY!,
    });

    const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);

    const [mapRef, setMapRef] = useState<google.maps.Map | null>(null)

    useEffect(() => {
        if (isLoaded) {
            const directionsService = new google.maps.DirectionsService();

            directionsService.route(
                {
                    origin,
                    destination,
                    travelMode: google.maps.TravelMode.DRIVING,
                },
                (result, status) => {
                    if (status === google.maps.DirectionsStatus.OK && result) {
                        setDirections(result);

                        const bounds = new google.maps.LatLngBounds();
                        result.routes[0].legs.forEach((leg) => {
                            bounds.extend(leg.start_location);
                            bounds.extend(leg.end_location);
                        });

                        mapRef?.fitBounds(bounds);
                    } else {
                        console.error(`Error fetching directions: ${status}`);
                    }
                }
            );
        }
    }, [isLoaded, mapRef, destination, origin])

    const { aspectRatio } = useUpdateAspectRatio()

    const mapContainerStyle = {
        width: "100%",
        aspectRatio,
    }

    if (!isLoaded) return <p>Carregando o mapa...</p>

    const {hours, minutes} = secondsToHoursMinutes(Number(duration.replace('s', '')))

    return <GoogleMap
            mapContainerStyle={mapContainerStyle}
            // zoom={zoom}
            // center={center}
            onLoad={(map) => setMapRef(map)}
            options={{ disableDefaultUI: true }}
        >
            <div className="absolute left-1/2 bg-gray-800 flex flex-col p-2 rounded top-2">
                <span>{Number((distance / 1000).toFixed(2))} km</span>
                <span>{hours}h {minutes}m</span>
            </div>
            {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
}