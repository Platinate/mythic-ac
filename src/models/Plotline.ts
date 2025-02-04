import { generateRandomId } from "../utils/utils";

export interface IPlotline {
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