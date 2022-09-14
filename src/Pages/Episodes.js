import React, { useEffect, useState } from "react";
import EpisodesList from "../Components/EpisodesList/EpisodesList"

const Episodes = () => {

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        fetch("https://rickandmortyapi.com/api/episode")
        .then((response) => response.json())
        .then(episodes => {
            setEpisodes(episodes.results);
        });
    }, []);

    console.log("episodes", episodes)
    return(
        <EpisodesList episodes={episodes}/> 
    )
};

export default Episodes;
