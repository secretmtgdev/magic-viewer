import { TPrice } from "../../utils/Types";
import { formalizeWord } from "../../utils/Utils";

export default function PriceContainer(priceInfo: TPrice) {

    return(
        <>
            {Object.keys(priceInfo).map((key, idx) => (
                <p>
                    {/** Unknown eliminates the original typing */}
                    {formalizeWord(key)}: {(priceInfo as unknown as Record<string, string>)[key]}
                </p>
            ))}
        </>
    )
}