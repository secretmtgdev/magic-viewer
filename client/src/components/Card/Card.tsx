import React from 'react';

import CardCallout from '../CardCallout/CardCallout';
import CardImage from '../CardImage/CardImage';
import PriceContainer from '../PriceContainer/PriceContainer';

import { useState } from 'react';
import { ICardProps } from '../../utils/Interfaces';

import './Card.css';

// Component name must start with a capital letter
export default function Card(cardProps: ICardProps) {
    const [hiddenState, setHiddenState] = useState(true);

    // Multiline jsx must be wrapped in parenthesis
    return (
        <>
            <div                  
                onClick={() => setHiddenState(!hiddenState)}
                id={cardProps.card.name}
                className='card-container'
                >
                <CardImage {...cardProps} />
                <PriceContainer {...cardProps.card.price} />
            </div>
            <CardCallout cardProps={cardProps} hidden={hiddenState} />
        </>        
    );
}