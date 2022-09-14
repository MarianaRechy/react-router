import React from "react";
import PostCard from "../PostCard/PostCard";
import styles from '../CardList/CardList.module.scss'

const EpisodesList = ({episodes}) => {
    console.log("episodes", episodes)
    return (
        <div className={styles.postListContainer}>
            <h1>Episodes List</h1>
            <div>
                {episodes.map((episode) => {
                    const {id, name, episode: _episode, air_date } = episode;
                    return (
                        <PostCard
                            key={id}
                            id={id}
                            name={name}
                            status={null}
                            species={null}
                            image={null}
                            primaryBlockTile="Episode:"                        
                            primaryBlock={_episode} 
                            secondaryBlockTitle="First aired:" 
                            secondaryBlock={air_date}  
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default EpisodesList;