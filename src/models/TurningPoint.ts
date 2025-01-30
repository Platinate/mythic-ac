import { PlotlineStatus } from "./enums";
import { IPlotPoint } from "./PlotPoint";

export interface ITurningPoint {
    number: number;
    plotline: string;
    plotlineStatus: PlotlineStatus;
    plotPoints: IPlotPoint[];
    notes: string;
}

export class TurningPointModel implements ITurningPoint {

    /**
     *
     */
    constructor() {
        this.number = 0;
        this.plotline = '';
        this.plotlineStatus = PlotlineStatus.New;
        this.plotPoints = [];
        this.notes = '';
    }

    number: number;
    plotline: string;
    plotlineStatus: PlotlineStatus;
    plotPoints: IPlotPoint[];
    notes: string;

}