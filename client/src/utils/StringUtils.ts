import { TitleConstants } from "./Constants";

export const formalizeWord = (word: string) => {
    const firstCapital = word[0].toLocaleUpperCase() + word.slice(1);
    const splitPhrase = firstCapital.split(/(?=[A-Z])/);
    return splitPhrase.join(' ');
}

export const hashPhrase = (phrase: string): number => {
    let hashcode: number = 0;
    for (let i = 0; i < phrase.length; i += 1) {
        hashcode = (hashcode * Math.pow(37, i + 1) + phrase.charCodeAt(i)) % TitleConstants.DEFAULT_LETTERS_IN_PHRASE;
    }

    return hashcode;
}
