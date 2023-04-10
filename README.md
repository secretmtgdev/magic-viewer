# Magic Viewer

## Description

Just a simple project that I'm creating to showcase some of my EDH decks.

## How it works

### Running the program

- To start the client, run `npm start` from **/client**
- To start the server, run `node server` from **/server/src**
- To start the tests, run `npm test` from **/client**

### Core third party tech

#### Client

- [React](https://react.dev/)
- [Scryfall SDK](https://github.com/ChiriVulpes/scryfall-sdk)

#### Server

- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

#### Testing

- [Babel](https://babeljs.io/)
- [Enzyme](https://enzymejs.github.io/enzyme/)
- [Jest](https://jestjs.io/)

## Progress

### April 3, 2023

Today is a big milestone. I really admire EdhRec and the pricing that they've setup. So, using ScryFall's SDK and a little bit of react/css average prices of the cards have been placed.

![Image showcasing cards and prices.](https://raw.githubusercontent.com/secretmtgdev/magic-viewer/main/progress-images/magic-viewer-1.png)

_More details and features to come!_

## Miscellaneous notes

To find out the number of lines that have been written by developers, on this project, run `git ls-files | grep -v '\.d.ts\|\.json\|\.png\|\.jpeg\|\.gitignore\|\.md\|\.ico' | xargs wc -l`