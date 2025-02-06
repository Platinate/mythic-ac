import { generateRandomId } from "../utils/utils";
import { SlotType } from "./enums";
import { ISlot } from "./Slot";

export interface ICharacterSlot extends ISlot {
    characterId?: number;
}

export class CharacterSlot implements ICharacterSlot {

    constructor() {
        this.id = generateRandomId();
        this.startRange = 0;
        this.endRange = 0;
        this.slotType = SlotType.New;
    }

    id: number;
    startRange: number;
    endRange: number;
    characterId?: number;
    slotType: SlotType;
}