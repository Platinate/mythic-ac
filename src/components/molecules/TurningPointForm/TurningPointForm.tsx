import React from "react";
import { ITurningPoint } from "../../../models/TurningPoint";
import Grid from "@mui/material/Grid2";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import { PlotlineStatus } from "../../../models/enums";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

import "./TurningPointForm.css";
import PlotPointForm from "../PlotPointForm/PlotPointForm";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { updateTurningPoint } from "../../../redux/reducers/adventureReducer";
import { RootState } from "../../../redux/stores";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";

interface IProps {
  index: number;
  values: ITurningPoint;
  onValueChange: (index: number, key: string, value: any) => void;
  onAddPlotPointClick: (index: number) => void;
  onPlotPointValueChange: (turningPointindex: number, plotPointIndex: number, key: string, value: any) => void;
  onRollPlotPoint: () => void;
}
const TurningPointForm: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();
  const plotlines = useSelector((state: RootState) => state.plotlines);
  const handleOnChange = (evt) => {
    dispatch(updateTurningPoint({ id: props.index, values: { ...props.values, [evt.target.name]: evt.target.value } }));
  };

  const handleOnPlotPointValueChange = (plotPointIndex: number, key: string, value: any) => {
    props.onPlotPointValueChange(props.index, plotPointIndex, key, value);
  };
  return (
    <div className="TurningPointForm">
      <Grid container spacing={2} alignItems="center">
        <Grid size={1}>Status</Grid>
        <Grid size={3}>
          <FormControl>
            <Select size="small" id="plotlineStatus" name="plotlineStatus" value={props.values.plotlineStatus} onChange={handleOnChange}>
              <MenuItem value={PlotlineStatus.New}>New</MenuItem>
              <MenuItem value={PlotlineStatus.Progression}>Progression</MenuItem>
              <MenuItem value={PlotlineStatus.Conclusion}>Conclusion</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={2}>
          Plotline
        </Grid>
        <Grid size={4}>
          <FormControl>
            <Select size="small" id="plotlineId" name="plotlineId" value={props.values.plotlineId} onChange={handleOnChange}>
              {plotlines.map((pl) => (
                <MenuItem value={pl.id}>{pl.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={2}>
          <Button startIcon={<Add/>} variant="contained">Add plotline</Button>
        </Grid>
        <Grid size={6}>
          <h4>Plot Point</h4>
        </Grid>
        <Grid size={6}>
          <h4>Invoked Characters</h4>
        </Grid>
        <Grid size={12}>
          <PlotPointForm values={props.values.plotPoint1} index={props.index} onValueChange={handleOnPlotPointValueChange} onRollPlotPoint={props.onRollPlotPoint} />
        </Grid>
        <Grid size={12}>
          <PlotPointForm values={props.values.plotPoint2} index={props.index} onValueChange={handleOnPlotPointValueChange} onRollPlotPoint={props.onRollPlotPoint} />
        </Grid>
        <Grid size={12}>
          <PlotPointForm values={props.values.plotPoint3} index={props.index} onValueChange={handleOnPlotPointValueChange} onRollPlotPoint={props.onRollPlotPoint} />
        </Grid>
        <Grid size={12}>
          <PlotPointForm values={props.values.plotPoint4} index={props.index} onValueChange={handleOnPlotPointValueChange} onRollPlotPoint={props.onRollPlotPoint} />
        </Grid>
        <Grid size={12}>
          <PlotPointForm values={props.values.plotPoint5} index={props.index} onValueChange={handleOnPlotPointValueChange} onRollPlotPoint={props.onRollPlotPoint} />
        </Grid>
        <Grid size={12}>
          <FormControl>
            <TextField placeholder="Notes" id="notes" name="notes" aria-describedby="helper-notes" multiline value={props.values.notes} onChange={handleOnChange} />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default TurningPointForm;
