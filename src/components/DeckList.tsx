import { IDeckListProps } from "../utils/Interfaces";
import { TCardGroup } from "../utils/Types";
import CardGrid from "./CardGrid";

// Avoid changing props
export default function DeckList(props: IDeckListProps) {
    const drawSpells: TCardGroup = {
        cardList: [{ name: 'Cruel Bargain' }, { name: 'Infernal Contract' }, { name: 'Pains Reward' }],
        name: 'Draw Spells'
    }
    
    return (
        <>
            <h1>{props.name}</h1>

            // Use forward spread for conciseness
            <CardGrid {...drawSpells}/>
        </>        
    );
}