import React from "react";

import CardGrid from "../CardGrid/CardGrid";
import { hashPhrase } from "../../utils/StringUtils";
import { IDeckInformationProps } from "../../utils/Interfaces";

import './DeckList.css';

export default function DeckInformation(deckInformation: IDeckInformationProps) {
    return (
        <div id='deck-information-page'>
            <h1>{deckInformation.name}</h1>
            <h2>Commander: {deckInformation.commander}</h2>
            {deckInformation.sections ?
                deckInformation.sections.map((cardGroup, idx) => <CardGrid key={`${cardGroup.name}-${hashPhrase(cardGroup.name)}`} {...cardGroup} />):
                'No deck information'
            }
        </div>
    );
}
