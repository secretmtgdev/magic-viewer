import * as React from 'react';
import { IAlgorithmPickerProps } from '../../../common/utils/Interfaces';

/** This component is meant to be used by sorting and searching algorithms. **/
const AlgorithmPicker = (props: IAlgorithmPickerProps) => {
    let id = `${props.segment}-${props.type}-picker`;
    return (
        <>
            <label htmlFor='algorithm-options'>{props.name}</label>
            <select name='algorithms' id={id}>
                {props.algorithms.map((algorithm, i) => 
                    <option value={algorithm} key={`${id}-${i}`}>{algorithm}</option>
                )}
            </select>
        </>
    )
}

export default AlgorithmPicker;
