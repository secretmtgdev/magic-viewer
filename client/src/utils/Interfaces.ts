import { TCard, TCardGroup } from "./Types";

export interface ICardCalloutProps {
    cardProps: ICardProps;
    hidden: boolean;
}

export interface ICardProps {
    card: TCard;
    size?: number;
}

export interface ICardGridProps {
    cardList: TCard[];
    name: string;
}

export interface IDeckListProps {
    name: string;
}

export interface IDeckInformationProps {
    name: string;
    commander: string;
    sections: TCardGroup[];
}