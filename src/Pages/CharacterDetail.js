import { useEffect, useState } from "react";
import { useParams } from "react-router"
import PostCard from "../Components/PostCard";


const CharactersDetail = () =>{
    const params = useParams();
    const url = `https://rickandmortyapi.com/api/character/${params.characterid}`

    const [character, setCharacter] = useState (null)

    useEffect(()=>{
        fetch(url)
        .then((response)=> response.json())
        .then((data) => setCharacter(data))
        .catch((err)=> console.log("err", err))

    },[])

    if(!character) return <div> Cargando ... </div>
    return(
        <div>
             <PostCard
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            image={character.image}
                            primaryBlockTile="Last known location:"                        
                            primaryBlock={character.origin.name} 
                            secondaryBlockTitle="First seen in:" 
                            secondaryBlock={character.location.name}  
                        />
        </div>
    )

}

export default CharactersDetail;
