import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAdventureSheet } from "../../models/AdventureSheet";
import { ITurningPoint, TurningPointModel } from "../../models/TurningPoint";
import { Theme } from "../../models/enums";

const initialState: IAdventureSheet = {
    name: "",
    notes: "",
    date: "",
    theme1: Theme.Action,
    theme2: Theme.Mystery,
    theme3: Theme.Personal,
    theme4: Theme.Social,
    theme5: Theme.Tension,
    turningPoints: []
}

const adventureSlice = createSlice({
    name: 'adventure',
    initialState: initialState,
    reducers: {
        updateState: (state: any, action: PayloadAction<any>) => {
            Object.assign(state, action.payload);
        },
        addTurningPoint: (state) => {
            state.turningPoints.push(new TurningPointModel());
        },
        deleteTurningPoint: (state, action: PayloadAction<number>) => {
            state.turningPoints = state.turningPoints.filter(tp => tp.id != action.payload);
        },
        updateTurningPoint: (state, action: PayloadAction<{id:number, values: ITurningPoint}>) => {
            const index = state.turningPoints.findIndex(tp => tp.id === action.payload.id);
            if(index > -1) {
                state.turningPoints[index] = action.payload.values;
            }
        }
    }
})

export const { updateState , addTurningPoint, deleteTurningPoint, updateTurningPoint } = adventureSlice.actions;

export default adventureSlice.reducer;