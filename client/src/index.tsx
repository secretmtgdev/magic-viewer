import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Different project imports. TODO: Load this based off of configuration settings.
// import DeckViewer from './DeckViewer/DeckViewer';
import PackSimulator from './PackSimulator/PackSimulator';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <DeckViewer /> */}
    <PackSimulator />
  </React.StrictMode>
);
