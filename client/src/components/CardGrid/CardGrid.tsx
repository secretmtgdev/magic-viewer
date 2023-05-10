import React from 'react';
import Card from '../Card/Card';

import { useCallback, useEffect, useState } from 'react';
import { ICardGridProps } from '../../utils/Interfaces';
import { hashPhrase } from '../../utils/StringUtils';
import { TCard } from '../../utils/Types';
import { convertCollectionToCards, convertToCollection, sortByCmc, sortByPrice } from '../../utils/Utils';

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

    // Handles sorting
    const handleSort = useCallback(async(sortCriteria: string) => {
        let collection: TCard[];
        if(sortCriteria === 'cmc') {
            collection = await sortByCmc(cardCollection);
        } else {
            collection = await sortByPrice(cardCollection);
        }

        // W/out the spread operator, react views the collection as an old value
        setCardCollection([...cardCollection]);
    }, [cardCollection]);

    // HTML lives in JSX because JavaScript determined content as sites became interactive
    return (
        // HTML attributes are camelCase since they are JS keys
        <div className='card-grid'>
            <h2>{props.name}
                <button onClick={() => handleSort('cmc')}>Sort By CMC</button>
                <button onClick={() => handleSort('price')}>Sort by price</button>
            </h2>
            {                
                cardCollection.map((cardData, i) => <Card key={`${cardData.name}-${hashPhrase(cardData.name)}-${i}`} card={cardData} />)
            }
        </div>
    )
}