import React from 'react';

import { TPrice } from "../../../common/utils/Types";
import { formalizeWord, hashPhrase } from "../../../common/utils/StringUtils";

export default function PriceContainer(priceInfo: TPrice) {

    return(
        <div className='price-container'>
            {Object.keys(priceInfo).map((key, idx) => (
                <p key={hashPhrase(key)}>
                    {/** Unknown eliminates the original typing */}
                    {formalizeWord(key)}: {(priceInfo as unknown as Record<string, string>)[key]}
                </p>
            ))}
        </div>
    )
}
