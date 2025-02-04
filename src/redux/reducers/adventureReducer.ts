import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAdventureSheet } from "../../models/AdventureSheet";
import { TurningPointModel } from "../../models/TurningPoint";
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
        }
    }
})

export const { updateState , addTurningPoint } = adventureSlice.actions;

export default adventureSlice.reducer;