import { Theme } from "./enums";
import { ITurningPoint } from "./TurningPoint";

export interface IAdventureSheet {
    name:string;
    notes:string;
    date:string;
    theme1?:Theme;
    theme2?:Theme;
    theme3?:Theme;
    theme4?:Theme;
    theme5?:Theme;
    turningPoints: ITurningPoint[];
}

export class AdventureSheetModel implements IAdventureSheet {

    constructor() {
        this.name = '';
        this.notes = '';
        this.date = '';
        this.theme1 = Theme.Action;
        this.theme2 = Theme.Tension;
        this.theme3 = Theme.Mystery;
        this.theme4 = Theme.Social;
        this.theme5 = Theme.Personal;
        this.turningPoints = [];
    }

    name: string;
    notes: string;
    date: string;
    theme1?: Theme;
    theme2?: Theme;
    theme3?: Theme;
    theme4?: Theme;
    theme5?: Theme;
    turningPoints: ITurningPoint[];

}