import React from "react";
import PostCard from "../PostCard/PostCard";
import styles from '../CardList/CardList.module.scss'

const PostList = ({results}) => {
    console.log("results", results)
    return (
        <div className={styles.postListContainer}>
            <h1>Post List</h1>
            <div className={styles.postCharacters}>
                {results.map((post) => {
                    const {id, name, image, status, species, origin} = post;
                    return (
                        <PostCard
                            key={id}
                            id={id}
                            name={name}
                            status={status}
                            species={species}
                            image={image}
                            primaryBlockTile="Last known location:"                        
                            primaryBlock={origin.name} 
                            secondaryBlockTitle="First seen in:" 
                            secondaryBlock={post.location.name}  
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default PostList;