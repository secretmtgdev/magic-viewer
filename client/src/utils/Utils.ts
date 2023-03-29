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
    return tCards;
}

export const rotateRowImages = (cardList: HTMLCollectionOf<HTMLElement>) => {
    // don't rotate cards when the handsize is less than or equal to two
    if (cardList.length <= 2)
    {
        return;
    }

    // Center card is always at a zero degree transform
    const mid = Math.floor(cardList.length / 2);
    let left = mid - 1;
    let right = mid + 1;
    while (left >= 0 || right < cardList.length)
    {
        if (left >= 0)
        {
            cardList[left].style.transform = `rotate(${-left * 0.1})`;
            left -= 1;
        }

        if (right < cardList.length)
        {
            cardList[right].style.transform = `rotate(${right * 0.1})`;
            right += 1;
        }
    }

}