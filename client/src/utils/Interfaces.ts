import { TCard } from "./Types";

export interface ICardProps {
    name: string;
    size?: number;
}

export interface ICardGridProps {
    cardList: TCard[];
    name: string;
}

export interface IDeckListProps {
    name: string;
}