import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface MagicSetState {
    value: string
}

const initialState: MagicSetState = {
    value: ''
}

export const magicSetSlice = createSlice({
    name: 'magicSet',
    initialState,
    reducers: {
        setMagicSet: (state, action: PayloadAction<string>) => {
            state.value = action.payload
        }
    }
});

export const { setMagicSet } = magicSetSlice.actions;
export default magicSetSlice.reducer;