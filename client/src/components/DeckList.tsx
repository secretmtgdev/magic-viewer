import { IDeckListProps } from "../utils/Interfaces";
import { TDeckList } from "../utils/Types";
import { getDeckData } from "../utils/Utils";
import { useEffect, useState } from 'react';
import CardGrid from "./CardGrid/CardGrid";
import { hashPhrase } from "../utils/StringUtils";

const defaultDecklist: TDeckList = {
    name: '',
    commander: '',
    sections: []
} 

// Avoid changing props
export default function DeckList(props: IDeckListProps) {
    const condensedName = props.name.split(' ').join('');
    const [deckInformation, setDeckInformation] = useState<TDeckList>(defaultDecklist);
    const [fetchError, setFetchError] = useState<boolean>(false);

    useEffect(() => {
        async function getDeck() {
            try 
            {
                const deckInfo: TDeckList = await getDeckData(condensedName);
                if (deckInfo) {
                    setDeckInformation(deckInfo);
                    setFetchError(false);
                }
            }
            catch (err)
            {
                // place default component
                setFetchError(true);
            }            
        }
    
        if (deckInformation.name === defaultDecklist.name) {
            getDeck();
        }
    }, [deckInformation, condensedName]);

    const deckInformationComponent = (
        <>
            <h1>{deckInformation.name}</h1>
            <h2>Commander: {deckInformation.commander}</h2>
            {deckInformation.sections ?
                deckInformation.sections.map((cardGroup, idx) => <CardGrid key={`${cardGroup.name}-${hashPhrase(cardGroup.name)}`} {...cardGroup} />):
                'No deck information'
            }
        </>
    );

    return (
        <>
            {
                !fetchError ? deckInformationComponent : <h1>Could not fetch decklist information</h1>
            }            
        </>        
    );
}