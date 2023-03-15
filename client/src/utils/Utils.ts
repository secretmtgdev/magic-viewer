import { TDeckList } from "./Types";

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