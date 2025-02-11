import { PlotlineStatus } from "./enums";
import { IPlotPoint } from "./PlotPoint";

export interface ITurningPoint {
    id: number;
    plotlineId: number;
    plotlineStatus: PlotlineStatus;
    plotPoint1: IPlotPoint;
    plotPoint2: IPlotPoint;
    plotPoint3: IPlotPoint;
    plotPoint4: IPlotPoint;
    plotPoint5: IPlotPoint;
    notes: string;
}