import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter } from "../../models/Character";
import { generateRandomId } from "../../utils/utils";

const initialState: ICharacter[] = [];

const charactersReducer = createSlice({
    name: 'characters',
    initialState: initialState,
    reducers: {
        addCharacter: (state, action: PayloadAction<Partial<ICharacter>>) => {
            state.push({ ...{ id: generateRandomId(), name: '' }, ...action.payload });
        },
        deleteCharacter: (state, action: PayloadAction<number>) => {
            return state.filter(pl => pl.id != action.payload);
        },
        updateCharacter: (state, action: PayloadAction<{ id: number, values: ICharacter }>) => {
            const index = state.findIndex(pl => pl.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload.values;
            }
        }
    }
})

export const { addCharacter, deleteCharacter, updateCharacter } = charactersReducer.actions;

export default charactersReducer.reducer;