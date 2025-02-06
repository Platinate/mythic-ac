import { SlotType } from "./enums";

export interface ISlot {
    id: number;
    startRange: number;
    endRange: number;
    slotType: SlotType;
}