import { TCard, TDeckList, TPrice } from "./Types";
import { Currency } from "./Constants";
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
    .catch(err => { throw err });
    return deckJson;
}

export const getAllSets = async () => {
    let allSets = await fetch(`http://${hostname}:${port}/allSets`, requestParams)
    .then(setData => setData.json())
    .then(setData => JSON.parse(setData))
    .catch(err => { throw err });
    return allSets;
}

export const convertToCollection = (cardList: TCard[]) => {
    return cardList.map(card => Scry.CardIdentifier.byName(card.name));
}

export const convertCollectionToCards = async (cardList: Scry.CardIdentifier[]) => {
    const cards = await Scry.Cards.collection(...cardList).waitForAll();
    const tCards = cards.map(card => {
        const price: TPrice = {
            currency: Currency[card.lang].name,
            // Can't use string typing for Scry.Crad.Prices, it expects usd | usd_foil | eur | eur_foil ...
            nonFoil: `${Currency[card.lang].symbol}${card.lang === 'en' ? card.prices['usd']: card.prices['eur']}` ?? 'No non-foil price',
            foil:  `${Currency[card.lang].symbol}${card.lang === 'en' ? card.prices['usd_foil'] : card.prices['eur_foil']}` ?? 'No foil price'
        };

        const imgUrl = card.image_uris ? card.image_uris!['border_crop'] : card.getFrontImageURI('png');

        return { name: card.name, manaValue: card.cmc, imgUrl, price };
    });

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