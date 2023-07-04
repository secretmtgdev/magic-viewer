import React from 'react';
import ServerDown from "../ExceptionHandlers/ServerDown";
import DeckInformation from "./DeckInformation";

import { IDeckListProps } from "../../../common/utils/Interfaces";
import { TDeckList } from "../../../common/utils/Types";
import { getDeckData } from "../../../common/utils/Utils";
import { useEffect, useState } from 'react';
import { Default } from "../../../common/utils/Constants";

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
    }, [deckInformation, condensedName, fetchError]);

    return (
        <>
            {
                !fetchError ? <DeckInformation {...deckInformation} /> : <ServerDown />
                
            }            
        </>       
    );
}