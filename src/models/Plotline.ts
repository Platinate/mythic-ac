import { generateRandomId } from "../utils/utils";
import { IListItem } from "./ListItem";

export interface IPlotline extends IListItem {
    id: number;
    name: string;
}

export class Plotline implements IPlotline {

    constructor() {
        this.id = generateRandomId();
        this.name = '';

    }
    id: number;
    name: string;


}