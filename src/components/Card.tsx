import * as Scry from 'scryfall-sdk';
import { useEffect, useState } from 'react';

// Component name must start with a capital letter
export default function Card() {
    const [cardImgURL, setCardImgURL] = useState('');
    const cardName = "Chalice of the Void";
    
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
        <div className='cardContainer'>
            <img
                src={cardImgURL}
                alt={cardName}
            />
        </div>
    );
}