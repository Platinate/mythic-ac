import { generateRandomId } from "../utils/utils";

export interface ICharacter {
    id: number;
    name: string;
}

export class Character implements ICharacter {
    constructor() {
        this.id = generateRandomId();
        this.name = '';
    }
    id: number;
    name: string;
}