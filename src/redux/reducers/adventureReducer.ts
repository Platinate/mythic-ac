import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAdventureSheet } from "../../models/AdventureSheet";
import { ITurningPoint, TurningPointModel } from "../../models/TurningPoint";
import { PlotlineStatus, Theme } from "../../models/enums";
import { IPlotPoint } from "../../models/PlotPoint";
import { generateRandomId } from "../../utils/utils";

const initialState: IAdventureSheet = {
  name: "",
  notes: "",
  date: "",
  theme1: Theme.Action,
  theme2: Theme.Mystery,
  theme3: Theme.Personal,
  theme4: Theme.Social,
  theme5: Theme.Tension,
  turningPoints: [],
};

const adventureSlice = createSlice({
  name: "adventure",
  initialState: initialState,
  reducers: {
    updateState: (state: any, action: PayloadAction<any>) => {
      Object.assign(state, action.payload);
    },
    addTurningPoint: (state) => {
      state.turningPoints.push({
        id: generateRandomId(),
        notes: "",
        plotlineStatus: PlotlineStatus.New,
        plotlineId: -1,
        plotPoint1: { event: "", charactersInvoked: [] },
        plotPoint2: { event: "", charactersInvoked: [] },
        plotPoint3: { event: "", charactersInvoked: [] },
        plotPoint4: { event: "", charactersInvoked: [] },
        plotPoint5: { event: "", charactersInvoked: [] },
      });
    },
    deleteTurningPoint: (state, action: PayloadAction<number>) => {
      state.turningPoints = state.turningPoints.filter((tp) => tp.id != action.payload);
    },
    updateTurningPoint: (state, action: PayloadAction<{ id: number; values: ITurningPoint }>) => {
      const index = state.turningPoints.findIndex((tp) => tp.id === action.payload.id);
      if (index > -1) {
        state.turningPoints[index] = action.payload.values;
      }
    },
    updatePlotPoint: (state, action: PayloadAction<{ turningPointId: number; propName: string; values: any }>) => {
      const index = state.turningPoints.findIndex((tp) => tp.id === action.payload.turningPointId);
      if (index > -1) {
        state.turningPoints[index] = { ...state.turningPoints[index], [action.payload.propName]: action.payload.values };
      }
    },
  },
});

export const { updateState, addTurningPoint, deleteTurningPoint, updateTurningPoint, updatePlotPoint } = adventureSlice.actions;

export default adventureSlice.reducer;
