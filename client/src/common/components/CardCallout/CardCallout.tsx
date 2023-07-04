import React from "react";

import { Callout } from "@fluentui/react";
import { ICardCalloutProps } from "../../../common/utils/Interfaces";
import CardImage from "../CardImage/CardImage";

import './CardCallout.css';

export default function CardCallout({cardProps, hidden}: ICardCalloutProps) {
    return (
        <Callout id="card-callout" hidden={hidden} target={document.getElementById(cardProps.card.name)}>
            <CardImage {...cardProps} />
        </Callout>
    )
}