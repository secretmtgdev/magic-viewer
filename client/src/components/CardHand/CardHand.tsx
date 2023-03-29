import { useEffect, useState } from "react";
import { rotateRowImages } from "../../utils/Utils";

export const CardHand = () => {
    const rotateHand = () => {
        const cardContainers = document.getElementsByClassName('.cardContainer');
        rotateRowImages(cardContainers as HTMLCollectionOf<HTMLElement>);    
    };

    return (
        <>
            <button onClick={rotateHand}>Rotate hand</button>
        </>
    )
}