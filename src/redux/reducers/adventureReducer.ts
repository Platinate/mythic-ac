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
      state.turningPoints = [
        ...state.turningPoints,
        {
          id: generateRandomId(),
          notes: "",
          plotlineStatus: PlotlineStatus.New,
          plotlineId: -1,
          plotPoint1: { event: "", charactersInvoked: [] },
          plotPoint2: { event: "", charactersInvoked: [] },
          plotPoint3: { event: "", charactersInvoked: [] },
          plotPoint4: { event: "", charactersInvoked: [] },
          plotPoint5: { event: "", charactersInvoked: [] },
        },
      ];
    },
    deleteTurningPoint: (state, action: PayloadAction<number>) => {
      state.turningPoints = state.turningPoints.filter((tp) => tp.id != action.payload);
    },
    updateTurningPoint: (state, action: PayloadAction<{ id: number; values: ITurningPoint }>) => {
      const index = state.turningPoints.findIndex((tp) => tp.id === action.payload.id);
      if (index > -1) {
        let updatedTurningPoints = [...state.turningPoints];
        updatedTurningPoints[index] = action.payload.values;
        state.turningPoints = updatedTurningPoints;
      }
    },
    updatePlotPoint: (state, action: PayloadAction<{ turningPointId: number; propName: string; values: any }>) => {
      let oldTurningPoints = [...state.turningPoints];
      const index = oldTurningPoints.findIndex((tp) => tp.id === action.payload.turningPointId);
      if (index > -1) {
        oldTurningPoints[index][action.payload.propName] = action.payload.values;
        state.turningPoints = oldTurningPoints;
      }
    },
  },
});

export const { updateState, addTurningPoint, deleteTurningPoint, updateTurningPoint, updatePlotPoint } = adventureSlice.actions;

export default adventureSlice.reducer;
