export interface IPlotPoint {
    event: string;
    charactersInvoked: string[];
}

export class PlotPointModel implements IPlotPoint {
    constructor() {
        this.event = '';
        this.charactersInvoked = [];
    }

    event: string;
    charactersInvoked: string[];
}