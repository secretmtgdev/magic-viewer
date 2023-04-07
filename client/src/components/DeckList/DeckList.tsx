import { IDeckListProps } from "../../utils/Interfaces";
import { TDeckList } from "../../utils/Types";
import { getDeckData } from "../../utils/Utils";
import { useEffect, useState } from 'react';
import DeckInformation from "./DeckInformation";
import ServerDown from "../ExceptionHandlers/ServerDown";
import { Default } from "../../utils/Constants";

// Avoid changing props
export default function DeckList(props: IDeckListProps) {
    const condensedName = props.name.split(' ').join('');
    const [deckInformation, setDeckInformation] = useState<TDeckList>(Default.Decklist);
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
    
        if (deckInformation.name === Default.Decklist.name) {
            getDeck();
        }
    }, [deckInformation, condensedName]);

    return (
        <>
            {
                !fetchError ? <DeckInformation {...deckInformation} /> : <ServerDown />
                
            }            
        </>       
    );
}