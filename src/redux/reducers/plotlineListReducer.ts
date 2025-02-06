import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SlotType } from "../../models/enums";
import { IPlotlineSlot } from "../../models/PlotlineSlot";

const initialState: IPlotlineSlot[] = [
    {
        id: 1,
        startRange: 1,
        endRange: 4,
        slotType: SlotType.MostLogical
    },
    {
        id: 2,
        startRange: 5,
        endRange: 8,
        slotType: SlotType.New
    },
    {
        id: 3,
        startRange: 9,
        endRange: 12,
        slotType: SlotType.MostLogical
    },
    {
        id: 4,
        startRange: 13,
        endRange: 16,
        slotType: SlotType.MostLogical
    },
    {
        id: 5,
        startRange: 17,
        endRange: 20,
        slotType: SlotType.MostLogical
    },
    {
        id: 6,
        startRange: 21,
        endRange: 24,
        slotType: SlotType.New
    },
    {
        id: 7,
        startRange: 25,
        endRange: 28,
        slotType: SlotType.MostLogical
    },
    {
        id: 8,
        startRange: 29,
        endRange: 32,
        slotType: SlotType.MostLogical
    },
    {
        id: 9,
        startRange: 33,
        endRange: 36,
        slotType: SlotType.MostLogical
    },
    {
        id: 10,
        startRange: 37,
        endRange: 40,
        slotType: SlotType.New
    },
    {
        id: 11,
        startRange: 41,
        endRange: 44,
        slotType: SlotType.MostLogical
    },
    {
        id: 12,
        startRange: 45,
        endRange: 48,
        slotType: SlotType.MostLogical
    },
    {
        id: 13,
        startRange: 49,
        endRange: 52,
        slotType: SlotType.MostLogical
    },
    {
        id: 14,
        startRange: 53,
        endRange: 56,
        slotType: SlotType.New
    },
    {
        id: 15,
        startRange: 57,
        endRange: 60,
        slotType: SlotType.MostLogical
    },
    {
        id: 16,
        startRange: 61,
        endRange: 64,
        slotType: SlotType.MostLogical
    },
    {
        id: 17,
        startRange: 65,
        endRange: 68,
        slotType: SlotType.MostLogical
    },
    {
        id: 18,
        startRange: 69,
        endRange: 72,
        slotType: SlotType.New
    },
    {
        id: 19,
        startRange: 73,
        endRange: 76,
        slotType: SlotType.MostLogical
    },
    {
        id: 20,
        startRange: 77,
        endRange: 80,
        slotType: SlotType.MostLogical
    },
    {
        id: 21,
        startRange: 81,
        endRange: 84,
        slotType: SlotType.MostLogical
    },
    {
        id: 22,
        startRange: 85,
        endRange: 88,
        slotType: SlotType.New
    },
    {
        id: 23,
        startRange: 89,
        endRange: 92,
        slotType: SlotType.MostLogical
    },
    {
        id: 24,
        startRange: 93,
        endRange: 96,
        slotType: SlotType.MostLogical
    },
    {
        id: 25,
        startRange: 97,
        endRange: 100,
        slotType: SlotType.MostLogical
    }
];

const plotlineListReducer = createSlice({
    name: 'plotlineList',
    initialState: initialState,
    reducers: {
        registerPlotline: (state, action: PayloadAction<number>) => {
            const index = state.findIndex(pls => !pls.plotlineId);
            if (index > -1) {
                const listUpdated = [...state];
                listUpdated[index].plotlineId = action.payload;
                state = listUpdated;
            }
        }
    }
})

export const { registerPlotline } = plotlineListReducer.actions;

export default plotlineListReducer.reducer;