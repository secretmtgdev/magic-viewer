import DeckList from './components/DeckList/DeckList';
import React, { useEffect, useState } from 'react';
import { getAllSets } from '../common/utils/Utils';

function DeckViewer() {
  // Load the set information
  const [allSets, setAllSets] = useState({});
  const [fetchError, setFetchError] = useState<boolean>(false);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);

    useEffect(() => {
        async function getAllSetData() {
            try 
            {
                const setInformation = await getAllSets();
                if (setInformation) {
                    setAllSets(setInformation);
                    setFetchError(false);

                    // TODO: Set this in a Redux state to be accessed by all other components
                    (window as any).allSets = setInformation;
                }
            }
            catch (err)
            {
                // place default component
                setFetchError(true);
            }            
        }

        if (firstLoad)
        {
          getAllSetData();
          setFirstLoad(false);
        }
    }, [allSets, firstLoad, fetchError]);

  return (
    // Fragments group content without leaving a trace on the browser HTML tree
    <div id='app-wrapper'>
      {firstLoad ? 
        <h1>Data is still loading</h1>:      
        <DeckList name='Sheoldred the Apocalypse'/>
      }
    </div>
  )
}

export default DeckViewer;
