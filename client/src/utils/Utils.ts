import { TCard, TDeckList } from "./Types";
import * as Scry from 'scryfall-sdk';

const hostname = 'localhost';
const port = 8081;
const requestParams: RequestInit = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};

export const getDeckData = async (deckName: string) => {
    let deckJson: TDeckList = await fetch(`http://${hostname}:${port}/deckList/${deckName}`, requestParams)
    // JSON string
    .then(deckData => deckData.json())
    .then(deckData => JSON.parse(deckData))
    .catch(err => console.error(err));
    return deckJson;
}

export const convertToCollection = (cardList: TCard[]) => {
    return cardList.map(card => Scry.CardIdentifier.byName(card.name));
}

export const convertCollectionToCards = async (cardList: Scry.CardIdentifier[]) => {
    const cards = await Scry.Cards.collection(...cardList).waitForAll();
    const tCards = cards.map(card => ({ name: card.name, manaValue: card.cmc, imgUrl: card.getFrontImageURI("png") }));
    console.log(tCards)
    return tCards;
}