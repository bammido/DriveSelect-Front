import { StandaloneSearchBox, useLoadScript } from "@react-google-maps/api"
import Input from "../input";
import { useRef } from "react";

interface ISearchDirectionBoxProps { 
    onChange: (location: string) => void;
    placeholder?: string;
    id?: string;
}

export default function SearchDirectionBox({ onChange, placeholder, id }: ISearchDirectionBoxProps) {
    const searchBoxLoad = useRef<null | google.maps.places.SearchBox>(null)

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.GOOGLE_API_KEY!,
        libraries: ["places"]
    });

    if (!isLoaded) return <p>Carregando o mapa...</p>;

    const onSearchBoxLoad =  (ref: google.maps.places.SearchBox) => {searchBoxLoad.current = ref};
    const onPlacesChanged = () => {
        if(!searchBoxLoad?.current) {
            return
        }

        const places = searchBoxLoad?.current?.getPlaces()

        if(!places) {
            return
        }

        const location = places[0]

        if(!location.formatted_address){
            return 
        }

        onChange(location.formatted_address)
    }

    return <StandaloneSearchBox
        onLoad={onSearchBoxLoad}
        onPlacesChanged={onPlacesChanged}
    >
        <Input
            type="text"
            placeholder={placeholder?? "Procurar endereço"}
            id={id}
        />
    </StandaloneSearchBox>
}