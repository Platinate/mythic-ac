import { generateRandomId } from "../utils/utils";
import { IListItem } from "./ListItem";

export interface ICharacter extends IListItem {
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