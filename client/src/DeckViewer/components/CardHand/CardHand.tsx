import React from 'react';

import { rotateRowImages } from "../../../common/utils/Utils";

export const CardHand = () => {
    const rotateHand = () => {
        const cardContainers = document.getElementsByClassName('cardContainer');
        console.error(cardContainers);
        rotateRowImages(cardContainers as HTMLCollectionOf<HTMLElement>);    
    };

    return (
        <>
            <button onClick={rotateHand}>Rotate hand</button>
        </>
    )
}