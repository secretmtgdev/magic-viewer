import { CipherConstants } from "./Constants";
import { TCard } from "./Types";

export const CeasarCipherEncrypt = (cards: TCard[]): TCard[] => {
    for(let card of cards) {
        card.name = CeasarCipher(card.name);
        card.price.currency = CeasarCipher(card.price.currency);
        card.price.foil = CeasarCipher(card.price.foil);
        card.price.nonFoil = CeasarCipher(card.price.nonFoil);
    }
    
    return cards;
}

export const CeasarCipherDecrypt = (cards: TCard[]): TCard[] => {
    for(let card of cards) {
        card.name = CeasarCipher(card.name, true);        
        card.price.currency = CeasarCipher(card.price.currency, true);
        card.price.foil = CeasarCipher(card.price.foil, true);
        card.price.nonFoil = CeasarCipher(card.price.nonFoil, true);
    }
    
    return cards;
}

export const CeasarCipher = (phrase: string, decrypt = false): string => {
    let chars: string[] = phrase.split('');
    for(let i = 0; i < chars.length; i++) {
        let c = chars[i];
        if(decrypt) {
            chars[i] = String.fromCharCode(c.charCodeAt(0) - CipherConstants.CEASAR_KEY); 
        } else {
            chars[i] = String.fromCharCode(c.charCodeAt(0) + CipherConstants.CEASAR_KEY); 
        }
    }
    return chars.join('');
}
