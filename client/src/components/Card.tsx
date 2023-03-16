import * as Scry from 'scryfall-sdk';
import { CardConstants} from '../utils/Constants';
import { useEffect, useState } from 'react';
import { ICardProps } from '../utils/Interfaces';

// Component name must start with a capital letter
export default function Card(props: ICardProps) {
    // Multiline jsx must be wrapped in parenthesis
    return (
        // Only one root element may be returned because JSX is an object
        <span className='cardContainer'>
            <img
                // Curly braces enable JavaScript in markup
                src={props.imgUrl}

                // Curly braces can only be used as texxt or attributes
                alt={props.name}
                height={props.size ?? CardConstants.DEFAULT_CARD_HEIGHT}
                width={props.size ?? CardConstants.DEFAULT_CARD_WIDTH}
            />
        </span>
    );
}