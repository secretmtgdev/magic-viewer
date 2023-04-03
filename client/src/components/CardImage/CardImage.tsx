import { CardConstants } from "../../utils/Constants";
import { ICardProps } from "../../utils/Interfaces";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const CardImage = ({card, size}: ICardProps) => {
    return (
        <LazyLoadImage
            // Curly braces enable JavaScript in markup
            src={card.imgUrl}
            placeholderSrc={'../../images/placeholder.jgpeg'}

            // Curly braces can only be used as texxt or attributes
            alt={card.name}
            height={size ?? CardConstants.DEFAULT_CARD_HEIGHT}
            width={size ?? CardConstants.DEFAULT_CARD_WIDTH}
            loading={'lazy'}
        />
    )
}

export default CardImage;