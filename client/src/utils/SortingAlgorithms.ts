import { TCard, sortingType } from "./Types";

export const bubbleSort = (cards: TCard[], sortType: sortingType) => {
    console.error('INVOKING BUBBLE SORT');
    console.error(cards);
    if(cards.length < 2) return cards;

    for(let i = cards.length; i > 0; i--) {
        let swapped: boolean = false;
        for(let j = 1; j < i; j++) {
            let firstCMC = getSortValueByType(cards[j - 1], sortType);
            let secondCMC = getSortValueByType(cards[j], sortType);
            if(firstCMC > secondCMC) {
                swap(cards, j, j - 1);
                swapped = true;
            }
        }

        if(!swapped) {
            break;
        }
    }

    console.error(cards);
    return cards;
}

export const selectionSort = (cards: TCard[], sortType: sortingType) => {
    let n: number = cards.length;
    for(let i = 0; i < n - 1; i++) {
        let minIdx = i;
        let minVal = getSortValueByType(cards[minIdx], sortType);
        for(let j = i + 1; j < n; j++) {
            let valHere = getSortValueByType(cards[j], sortType);
            if (valHere < minVal) {
                minIdx = j;
                minVal = valHere;
            }
        }

        swap(cards, minIdx, i);
    }

    return cards;
}

export const insertionSort = (cards: TCard[], sortType: sortingType) => {
    let n: number = cards.length;
    for(let i = 1; i < n; i++) {
        let key = cards[i];
        let j = i - 1;
        while(j >= 0 && getSortValueByType(cards[j], sortType) > getSortValueByType(key, sortType)) {
            cards[j + 1] = cards[j];
            j -= 1;
        }

        cards[j + 1] = key;
    }

    return cards;
}

/********************
 ** HELPER METHODS ** 
 ********************/
const getSortValueByType = (card: TCard, sortType: sortingType) => {
    return sortType === 'cmc' ? card.manaValue : 
        sortType === 'price' ? convertCurrencyToNumber(card.price.nonFoil) : -1;
}

const swap = (arr: TCard[], i: number, j: number) => {
    let tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
}

const convertCurrencyToNumber = (currency: string) => {
    currency = currency.replace(/[^0-9.-]+/g, '');
    return parseFloat(currency);
}
