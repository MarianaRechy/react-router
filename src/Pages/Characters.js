import React, { useEffect, useState } from "react";
import CardList from "../Components/CardList/CardList"

const Characters = () => {

    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then(characters => {
            setCharacters(characters.results);
        });
    }, []);

    console.log("character", characters)
    return(
        <CardList results={characters}/> 
    )
};

export default Characters;
