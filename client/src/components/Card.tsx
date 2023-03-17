import { CardConstants} from '../utils/Constants';
import { ICardProps } from '../utils/Interfaces';

// Component name must start with a capital letter
export default function Card({card, size}: ICardProps) {
    // Multiline jsx must be wrapped in parenthesis
    return (
        // Only one root element may be returned because JSX is an object
        <span className='cardContainer'>
            <img
                // Curly braces enable JavaScript in markup
                src={card.imgUrl}

                // Curly braces can only be used as texxt or attributes
                alt={card.name}
                height={size ?? CardConstants.DEFAULT_CARD_HEIGHT}
                width={size ?? CardConstants.DEFAULT_CARD_WIDTH}
            />
        </span>
    );
}