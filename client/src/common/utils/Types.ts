export type TCard = {
    name: string;
    manaValue: number;
    price: TPrice;
    imgUrl?: string;
}

export type TPrice= {
    currency: string;
    nonFoil: string;
    foil: string; // Some cards don't have a foil price
}

export type TCardGroup = {
    cardList: TCard[];
    name: string;
}

export type TDeckList = {
    name: string;
    commander: string;
    sections: TCardGroup[];
}

export type TCurrencyInfo = {
    abbreviation: string;
    name: string;
    symbol: string;
}

/***************
 ** DSA Types **
 ***************/
export type cipherType = 'string';
export type sortingType = 'cmc' | 'price';
export type sortingFunction = (cards: TCard[], sortType: sortingType) => TCard[];
export type searchingFunction = (cards: TCard[], prop: any) => TCard;
export type cipherFunction = (cards: TCard[]) => TCard[];