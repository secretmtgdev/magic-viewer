import { ICardGridProps } from '../utils/Interfaces';
import Card from './Card';

// React is a JavaScript library, JSX is a syntax extension
export default function CardGrid(props: ICardGridProps) {
    // HTML lives in JSX because JavaScript determined content as sites became interactive
    return (
        // HTML attributes are camelCase since they are JS keys
        <div className='card-grid'>
            <h2>{props.name}</h2>
            {
                props.cardList.map((props, i) => <Card {...props} />)
            }
        </div>
    )
}