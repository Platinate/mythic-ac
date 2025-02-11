import { Theme } from "./enums";
import { ITurningPoint } from "./TurningPoint";

export interface IAdventureSheet {
    name:string;
    notes:string;
    date:string;
    theme1:Theme | null;
    theme2:Theme | null;
    theme3:Theme | null;
    theme4:Theme | null;
    theme5:Theme | null;
    turningPoints: ITurningPoint[];
}