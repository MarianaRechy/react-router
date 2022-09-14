import React, { useEffect, useState } from "react";
import LocationList from "../Components/LocationList/LocationList"

const Locations = () => {

    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/location")
        .then((response) => response.json())
        .then(locations => {
            setLocations(locations.results);
        });
    }, []);

    console.log("location", locations)
    return(
        <LocationList results={locations}/> 
    )
};

export default Locations;


