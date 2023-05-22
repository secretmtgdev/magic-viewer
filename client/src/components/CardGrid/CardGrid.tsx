import React from 'react';
import Card from '../Card/Card';

import { useCallback, useEffect, useState } from 'react';
import { ICardGridProps } from '../../utils/Interfaces';
import { hashPhrase } from '../../utils/StringUtils';
import { cipherFunction, sortingType, TCard } from '../../utils/Types';
import { convertCollectionToCards, convertToCollection } from '../../utils/Utils';
import AlgorithmPicker from '../AlgorithmPicker/AlgorithmPicker';
import { CipherAlgorithmMap, SortingAlgorithmMap } from '../../utils/Constants';

// React is a JavaScript library, JSX is a syntax extension
export default function CardGrid(props: ICardGridProps) {
    const collection = convertToCollection(props.cardList);
    const [cardCollection, setCardCollection] = useState<TCard[]>([]);
    const sortingAlgorithms: string[] = [
        'Bubble Sort',
        'Selection Sort',
        'Insertion Sort',
        'Merge Sort'
    ];

    const cipherAlgorithms: string[] = [
        'Ceasar Cipher Encrypt',
        'Ceasar Cipher Decrypt'
    ];

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
        let collection: TCard[] | TCard;
        let selection: HTMLElement | null = document.getElementById(`${props.name}-${sortCriteria}-picker`);
        if(!selection) return;

        let algorithm = SortingAlgorithmMap[(selection as HTMLSelectElement).value];
        collection = algorithm(cardCollection, sortCriteria as sortingType);

        // W/out the spread operator, react views the collection as an old value
        setCardCollection([...cardCollection]);
    }, [cardCollection]);

    // handles ciphering
    const handleCipher = useCallback(async(cipherType: string) => {
        let collection: TCard[] | TCard;
        let selection: HTMLElement | null = document.getElementById(`${props.name}-${cipherType}-picker`);
        if(!selection) return;

        let algorithm = CipherAlgorithmMap[(selection as HTMLSelectElement).value];
        collection = (algorithm as cipherFunction)(cardCollection);

        // W/out the spread operator, react views the collection as an old value
        setCardCollection([...cardCollection]);

    }, [cardCollection]);

    // HTML lives in JSX because JavaScript determined content as sites became interactive
    return (
        // HTML attributes are camelCase since they are JS keys
        <div className='card-grid'>
            <h2>{props.name}</h2>
            <div>
                <AlgorithmPicker name={'Sort by CMC'} algorithms={sortingAlgorithms} type={'cmc'} segment={props.name}/>
                <button onClick={() => handleSort('cmc')}>Sort by cmc</button>
                <br />
                <AlgorithmPicker name={'Sort by price'} algorithms={sortingAlgorithms} type={'price'} segment={props.name}/>
                <button onClick={() => handleSort('price')}>Sort by price</button>
                <br />
                <AlgorithmPicker name={'Cipher cards'} algorithms={cipherAlgorithms} type={'string'} segment={props.name}/>
                <button onClick={() => handleCipher('string')}>Cipher card information</button>
            </div>
            {                
                cardCollection.map((cardData, i) => <Card key={`${cardData.name}-${hashPhrase(cardData.name)}-${i}`} card={cardData} />)
            }
        </div>
    )
}
