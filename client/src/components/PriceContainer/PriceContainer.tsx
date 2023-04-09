import { TPrice } from "../../utils/Types";
import { formalizeWord, hashPhrase } from "../../utils/StringUtils";
import React from 'react';

export default function PriceContainer(priceInfo: TPrice) {

    return(
        <>
            {Object.keys(priceInfo).map((key, idx) => (
                <p key={hashPhrase(key)}>
                    {/** Unknown eliminates the original typing */}
                    {formalizeWord(key)}: {(priceInfo as unknown as Record<string, string>)[key]}
                </p>
            ))}
        </>
    )
}