export interface IPlotPoint {
    event: string;
    characters: string;
}

export class PlotPointModel implements IPlotPoint {
    constructor() {
        this.event = '';
        this.characters = '';
    }

    event: string;
    characters: '';
}