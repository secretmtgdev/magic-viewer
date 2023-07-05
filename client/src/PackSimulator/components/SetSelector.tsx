import React, { useEffect, useState } from "react";
import { getAllSets } from "../../common/utils/Utils";

// store related
import type { RootState } from '../utils/store';
import { useSelector, useDispatch } from 'react-redux';
import { setMagicSet } from "../utils/magicSetSlice";

const SetSelector = () => {
    const [allSets, setAllSets] = useState<string[]>([]);
    const [fetchError, setFetchError] = useState<boolean>(false);
    const [firstLoad, setFirstLoad] = useState<boolean>(true);
    const magicSet = useSelector((state: RootState) => state.value);
    const dispatch = useDispatch();
    
    useEffect(() => {
        async function getAllSetData() {
            try 
            {
                const setInformation = await getAllSets();
                if (setInformation) {
                    const setKeys: string[] = Object.keys(setInformation);
                    const sets: Array<string> = new Array(setKeys.length);
                    setKeys.forEach((set, idx) => sets[idx] = setInformation[set]);
                    setAllSets(sets);
                    setFetchError(false);

                    // TODO: Set this in a Redux state to be accessed by all other components
                    (window as any).allSets = sets;
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
        <>
            <label htmlFor='set-selector'>Choose a set to open:</label>
            <select name='sets' id='set-selector' onChange={(e) => dispatch(setMagicSet(e.target.value))}>
                {allSets.map((setName, idx) => <option value={setName} key={`${setName}-${idx}`}>{setName}</option>)}
            </select>

            <p>Current set selected: {magicSet}</p>
        </>
    )
}

export default SetSelector;