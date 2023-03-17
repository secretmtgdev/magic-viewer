import { TCard } from "./Types";

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