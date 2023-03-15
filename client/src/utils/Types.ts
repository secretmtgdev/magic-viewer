export type TCard = {
    name: string;
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