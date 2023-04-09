import React from 'react';
import Card from '../Card/Card';

import { useEffect, useState } from 'react';
import { ICardGridProps } from '../../utils/Interfaces';
import { hashPhrase } from '../../utils/StringUtils';
import { TCard } from '../../utils/Types';
import { convertCollectionToCards, convertToCollection, rotateRowImages } from '../../utils/Utils';

// React is a JavaScript library, JSX is a syntax extension
export default function CardGrid(props: ICardGridProps) {
    const collection = convertToCollection(props.cardList);
    const [cardCollection, setCardCollection] = useState<TCard[]>([]);
    useEffect(() => {
        async function getCollection() {            
            const cardList = await convertCollectionToCards(collection);
            if (cardList.length !== 0) {
                setCardCollection(cardList);     
            }
        }
        
        if (cardCollection.length === 0) {
            getCollection();
        }
    }, [cardCollection, collection])

    // HTML lives in JSX because JavaScript determined content as sites became interactive
    return (
        // HTML attributes are camelCase since they are JS keys
        <div className='card-grid'>
            <h2>{props.name}</h2>
            {                
                cardCollection.map((cardData, i) => <Card key={`${cardData.name}-${hashPhrase(cardData.name)}-${i}`} card={cardData} />)
            }
        </div>
    )
}