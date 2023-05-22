import { TCard, sortingType } from "./Types";

export const bubbleSort = (cards: TCard[], sortType: sortingType): TCard[] => {
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

    return cards;
}

export const selectionSort = (cards: TCard[], sortType: sortingType): TCard[] => {
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

export const insertionSort = (cards: TCard[], sortType: sortingType): TCard[] => {
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

export const mergeSort = (cards: TCard[], sortType: sortingType): TCard[] => {
    return mergeSortHelper(cards, sortType, 0, cards.length);
}

const mergeSortHelper = (cards: TCard[], sortType: sortingType, start: number, end: number): TCard[] => {
    if(start >= end) {
        return cards;
    }

    const midPoint = start + Math.floor((end - start) / 2);
    let leftSort = mergeSortHelper(cards, sortType, start, midPoint);
    let rightSort = mergeSortHelper(cards, sortType, midPoint + 1, end);
    return merge(leftSort, rightSort, sortType, start, midPoint, end);
}

const merge = (cardsA: TCard[], cardsB: TCard[], sortType: sortingType, aStart: number, midPoint: number, bEnd: number): TCard[] => {
    let aLen = midPoint - aStart + 1;
    let bLen = bEnd - midPoint;

    let tempA = new Array(aLen).fill(0);
    let tempB = new Array(bLen).fill(0);
    let cardsC = new Array(aLen + bLen).fill(0);

    for(let i = 0; i < aLen; i++) tempA[i] = cardsA[i];
    for(let i = 0; i < bLen; i++) tempB[i] = cardsB[i];

    console.error(cardsA);
    console.error(cardsB);
    console.error(tempA);
    console.error(tempB);

    let i = 0;
    let j = 0;
    let k = 0;

    while (i < aLen && j < bLen) {
        let aVal = getSortValueByType(cardsA[i], sortType);
        let bVal = getSortValueByType(cardsB[j], sortType);
        if (tempA[i] <= tempB[j]) {
            cardsC[k] = tempA[i];
            i++;
        }
        else {
            cardsC[k] = tempB[j];
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < aLen) {
        cardsC[k] = tempA[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < bLen) {
        cardsC[k] = tempB[j];
        j++;
        k++;
    }

    return cardsC;
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
