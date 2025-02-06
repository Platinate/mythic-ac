export interface IPlotPoint {
    event: string;
    charactersInvoked: number[];
}

export class PlotPointModel implements IPlotPoint {
    constructor() {
        this.event = '';
        this.charactersInvoked = [];
    }

    event: string;
    charactersInvoked: number[];
}