import { generateRandomId } from "../utils/utils";
import { SlotType } from "./enums";
import { ISlot } from "./Slot";

export interface IPlotlineSlot extends ISlot {
    plotlineId?: number;
}

export class PlotlineSlot implements IPlotlineSlot {

    constructor() {
        this.id = generateRandomId();
        this.startRange = 0;
        this.endRange = 0;
        this.slotType = SlotType.New;
    }

    id: number;
    startRange: number;
    endRange: number;
    plotlineId?: number;
    slotType: SlotType;
}