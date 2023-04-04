import DeckList from './components/DeckList';

function App() {
  
  return (
    // Fragments group content without leaving a trace on the browser HTML tree
    <div id='app-wrapper'>
      <DeckList name='Sheoldred the Apocalypse'/>
    </div>
  )
}

export default App;
