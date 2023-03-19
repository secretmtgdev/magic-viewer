import { Callout } from "@fluentui/react";
import { ICardCalloutProps } from "../../utils/Interfaces";
import CardImage from "../CardImage";

import './CardCallout.css';

export default function CardCallout({cardProps, hidden}: ICardCalloutProps) {
    return (
        <Callout id="card-callout" hidden={hidden} >
            <CardImage {...cardProps} />
        </Callout>
    )
}