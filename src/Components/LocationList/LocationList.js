import React from "react";
import PostCard from "../PostCard/PostCard";
import styles from './LocationList.module.scss';

const LocationList = ({results}) => {
    console.log("results", results)
    return (
        <div className={styles.postListContainer}>
            <h1>Location List</h1>
            <div className={styles.postCharacters}>
                {results.map((location) => {
                    const {id, name, dimension,type} = location;
                    return (
                        <PostCard
                            key={id}
                            id={id}
                            name={name}
                            status={null}
                            species={null}
                            image={null}
                            primaryBlockTile="Dimension:"                        
                            primaryBlock={dimension} 
                            secondaryBlockTitle="Type:" 
                            secondaryBlock={type}  
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default LocationList;