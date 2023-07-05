import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store } from './PackSimulator/utils/store';
import { Provider } from 'react-redux';

// Different project imports. TODO: Load this based off of configuration settings.
// import DeckViewer from './DeckViewer/DeckViewer';
import PackSimulator from './PackSimulator/PackSimulator';

ReactDOM.render(
  <Provider store={store}>
      <PackSimulator />
    </Provider>,
    document.getElementById('root')
);
