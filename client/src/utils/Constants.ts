export const CardConstants = {
    DEFAULT_CARD_HEIGHT: 275,
    DEFAULT_CARD_WIDTH: 200
}

export const TitleConstants = {
    DEFAULT_WORDS_IN_PHRASE: 3,
    DEFAULT_LETTERS_IN_WORD: 5,
    DEFAULT_LETTERS_IN_PHRASE: 15
}

export const Default = {
    Decklist: {
        name: '',
        commander: '',
        sections: []
    } 
}

export const TestMocks = {
    CardMock: {
        card: {
            name: 'card',
            manaValue: 1,
            price: {
                currency: 'usd',
                nonFoil: '1.0',
                foil: '2.0'
            },
            imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_YCalozv20Oki516pDRvDiNfByLm_OxvEZc6_XN6TIw&s'
        }
    }
}