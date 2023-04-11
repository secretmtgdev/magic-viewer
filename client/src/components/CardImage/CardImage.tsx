import React from 'react';

// Lazy loading component to help improve the loading time of the site
import { LazyLoadImage } from "react-lazy-load-image-component";
import { CardConstants } from "../../utils/Constants";
import { ICardProps } from "../../utils/Interfaces";

import './CardImage.css';


export const CardImage = ({card, size}: ICardProps) => {
    return (
        <LazyLoadImage
            wrapperClassName='card-image-wrapper'
            
            // Curly braces enable JavaScript in markup
            src={card.imgUrl}
            placeholderSrc='../../images/placeholder.jpeg'
            className='card-image-container'

            // Curly braces can only be used as texxt or attributes
            alt={card.name}
            height={size ?? CardConstants.DEFAULT_CARD_HEIGHT}
            width={size ?? CardConstants.DEFAULT_CARD_WIDTH}
            loading={'lazy'}
        />
    )
}

export default CardImage;