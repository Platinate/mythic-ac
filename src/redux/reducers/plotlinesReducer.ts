import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPlotline, Plotline } from "../../models/Plotline";

const initialState: IPlotline[] = [
];

const plotlinesReducer = createSlice({
    name: 'plotLines',
    initialState: initialState,
    reducers: {
        addPlotline: (state, action: PayloadAction<Partial<IPlotline>>) => {
            state.push({ ...new Plotline(), ...action.payload });
        },
        deletePlotline: (state, action: PayloadAction<number>) => {
            state = state.filter(pl => pl.id != action.payload);
        },
        updatePlotline: (state, action: PayloadAction<{ id: number, values: IPlotline }>) => {
            const index = state.findIndex(pl => pl.id === action.payload.id);
            if (index > -1) {
                state[index] = action.payload.values;
            }
        }
    }
})

export const { addPlotline, deletePlotline, updatePlotline } = plotlinesReducer.actions;

export default plotlinesReducer.reducer;