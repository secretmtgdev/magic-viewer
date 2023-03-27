import { IDeckListProps } from "../utils/Interfaces";
import { TDeckList } from "../utils/Types";
import { getDeckData } from "../utils/Utils";
import { useEffect, useState } from 'react';
import CardGrid from "./CardGrid/CardGrid";

const defaultDecklist: TDeckList = {
    name: '',
    commander: '',
    sections: []
} 

// Avoid changing props
export default function DeckList(props: IDeckListProps) {
    const condensedName = props.name.split(' ').join('');
    const [deckInformation, setDeckInformation] = useState<TDeckList>(defaultDecklist);

    useEffect(() => {
        async function getDeck() {
            const deckInfo: TDeckList = await getDeckData(condensedName);
            if (deckInfo) {
                setDeckInformation(deckInfo);
            }
        }
    
        if (deckInformation.name === defaultDecklist.name) {
            getDeck();
        }
    }, [deckInformation, condensedName]);

    return (
        <>
            <h1>{deckInformation.name}</h1>
            <h2>Commander: {deckInformation.commander}</h2>
            {deckInformation.sections ?
                deckInformation.sections.map((cardGroup, idx) => <CardGrid key={idx} {...cardGroup} />):
                'No deck information'
            }
        </>        
    );
}