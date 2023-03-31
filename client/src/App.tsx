import { CardHand } from './components/CardHand/CardHand';
import DeckList from './components/DeckList';

function App() {
  
  return (
    // Fragments group content without leaving a trace on the browser HTML tree
    <>
      <DeckList name='Sheoldred the Apocalypse'/>
      <CardHand />
    </>
  )
}

export default App;
