import * as Scry from 'scryfall-sdk';
import { CardConstants} from '../utils/Constants';
import { useEffect, useState } from 'react';
import { ICardProps } from '../utils/Interfaces';

// Component name must start with a capital letter
export default function Card(props: ICardProps) {
    const [cardImgURL, setCardImgURL] = useState('');
    const cardName = props.name;
    
    // No dependencies
    useEffect(() => {
        async function getCard() {
            const card = await Scry.Cards.byName(cardName);
            const imgUrl = card.getFrontImageURI("png");
            if (imgUrl) {
                setCardImgURL(imgUrl);
            }
        }
    
        if (!cardImgURL) {
            getCard();
        }
    }, [cardImgURL]);
    
    // Multiline jsx must be wrapped in parenthesis
    return (
        // Only one root element may be returned because JSX is an object
        <div className='cardContainer'>
            <img
                // Curly braces enable JavaScript in markup
                src={cardImgURL}

                // Curly braces can only be used as texxt or attributes
                alt={cardName}
                height={props.size ?? CardConstants.DEFAULT_CARD_HEIGHT}
                width={props.size ?? CardConstants.DEFAULT_CARD_WIDTH}
            />
        </div>
    );
}