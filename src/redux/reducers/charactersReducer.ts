import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICharacter, Character } from "../../models/Character";

const initialState: ICharacter[] = [
    {
        id: 1,
        name: "Jean Phi"
    }
];

const charactersReducer = createSlice({
    name: 'plotLines',
    initialState: initialState,
    reducers: {
        addCharacter: (state, action: PayloadAction<Partial<ICharacter>>) => {
            state.push({ ...new Character(), ...action.payload });
        },
        deleteCharacter: (state, action: PayloadAction<number>) => {
            state = state.filter(pl => pl.id != action.payload);
        },
        updateCharacter: (state, action: PayloadAction<{ id: number, values: ICharacter }>) => {
            const index = state.findIndex(pl => pl.id === action.payload.id);
            if (index > -1) {
                const listUpdated = [...state];
                listUpdated[index] = action.payload.values;
                state = listUpdated;
            }
        }
    }
})

export const { addCharacter, deleteCharacter, updateCharacter } = charactersReducer.actions;

export default charactersReducer.reducer;