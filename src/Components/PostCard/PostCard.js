import { Link } from 'react-router-dom';
import React from 'react';
import CardInfo from '../CardInfo/CardInfo';
import styles from './PostCard.module.scss';
import Image from '../Image/Image'


const PostCard = ({key,id,name,image,status,species, primaryBlockTile, primaryBlock, secondaryBlockTitle, secondaryBlock}) => {
console.log("image",image)
return (
    <div className = {styles.postCard} >
        {image && <Image image={image}/>}
        <div className={styles.textContainer}>
            <div>
                <Link to= {`/characters/${id}`}><h2>{name}</h2></Link>
            </div>
            <div className={styles.status}>
               <p>{status}-{species}</p>
            </div>
            <div>
            <CardInfo className={styles.blocks}label={primaryBlockTile} content={primaryBlock} /> 
            <CardInfo className={styles.blocks}label={secondaryBlockTitle} content={secondaryBlock} /> 
            </div>
       </div>
    </div>
)
};

export default PostCard;