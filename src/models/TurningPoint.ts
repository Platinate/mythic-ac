import { generateRandomId } from "../utils/utils";
import { PlotlineStatus } from "./enums";
import { IPlotPoint } from "./PlotPoint";

export interface ITurningPoint {
    id: number;
    plotlineId?: number;
    plotlineStatus: PlotlineStatus;
    plotPoint1: IPlotPoint;
    plotPoint2: IPlotPoint;
    plotPoint3: IPlotPoint;
    plotPoint4: IPlotPoint;
    plotPoint5: IPlotPoint;
    notes: string;
}

export class TurningPointModel implements ITurningPoint {

    constructor() {
        this.id = generateRandomId();
        this.plotlineStatus = PlotlineStatus.New;
        this.plotlineId = undefined;
        this.plotPoint1 = {event: '', charactersInvoked: []};
        this.plotPoint2 =  {event: '', charactersInvoked: []};
        this.plotPoint3 =  {event: '', charactersInvoked: []};
        this.plotPoint4 =  {event: '', charactersInvoked: []};
        this.plotPoint5 =  {event: '', charactersInvoked: []};
        this.notes = '';
    }

    id: number;
    plotlineId?: number;
    plotlineStatus: PlotlineStatus;
    notes: string;
    plotPoint1: IPlotPoint;
    plotPoint2: IPlotPoint;
    plotPoint3: IPlotPoint;
    plotPoint4: IPlotPoint;
    plotPoint5: IPlotPoint;


}