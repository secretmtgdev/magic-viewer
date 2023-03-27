import { CardConstants } from "../../utils/Constants";
import { ICardProps } from "../../utils/Interfaces";

export const CardImage = ({card, size}: ICardProps) => {
    return (
        <img
            // Curly braces enable JavaScript in markup
            src={card.imgUrl}

            // Curly braces can only be used as texxt or attributes
            alt={card.name}
            height={size ?? CardConstants.DEFAULT_CARD_HEIGHT}
            width={size ?? CardConstants.DEFAULT_CARD_WIDTH}
        />
    )
}

export default CardImage;