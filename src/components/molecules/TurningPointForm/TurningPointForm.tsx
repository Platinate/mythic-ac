import React from "react";
import { ITurningPoint } from "../../../models/TurningPoint";
import Grid from "@mui/material/Grid2";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import { PlotlineStatus } from "../../../models/enums";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

import "./TurningPointForm.css";
import PlotPointForm from "../PlotPointForm/PlotPointForm";
import TextField from "@mui/material/TextField";

interface IProps {
  index: number;
  values: ITurningPoint;
  onValueChange: (index: number, key: string, value: any) => void;
  onAddPlotPointClick: (index: number) => void;
  onPlotPointValueChange: (turningPointindex: number, plotPointIndex: number, key: string, value: any) => void;
  onRollPlotPoint: () => void;
}
const TurningPointForm: React.FC<IProps> = (props) => {
  const handleOnChange = (evt) => {
    props.onValueChange(props.index, evt.target.name, evt.target.value);
  };

  const handleOnPlotPointValueChange = (plotPointIndex: number, key: string, value: any) => {
    props.onPlotPointValueChange(props.index, plotPointIndex, key, value);
  };
  return (
    <div className="TurningPointForm">
      <Grid container spacing={2}>
        <Grid size={2}>Turnign Point</Grid>
        <Grid size={1}>
          <FormControl>
            <Input id="number" name="number" aria-describedby="helper-number" value={props.values.number} onChange={handleOnChange} />
          </FormControl>
        </Grid>
        <Grid size={1}>Status</Grid>
        <Grid size={2}>
          <FormControl>
            <Select size="small" id="plotlineStatus" name="plotlineStatus" value={props.values.plotlineStatus} onChange={handleOnChange}>
              <MenuItem value={PlotlineStatus.New}>New</MenuItem>
              <MenuItem value={PlotlineStatus.Progression}>Progression</MenuItem>
              <MenuItem value={PlotlineStatus.Conclusion}>Conclusion</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid size={2}>Plotline</Grid>
        <Grid size={4}>
          <FormControl>
            <Input id="plotline" name="plotline" aria-describedby="helper-plotline" value={props.values.plotlineId} onChange={handleOnChange} />
          </FormControl>
        </Grid>
        <Grid size={6}><h4>Plot Point</h4></Grid>
        <Grid size={6}><h4>Invoked Characters</h4></Grid>
        {props.values.plotPoints.map((pp, index) => (
          <Grid size={12} key={index}>
            <PlotPointForm values={pp} index={index} onValueChange={handleOnPlotPointValueChange} onRollPlotPoint={props.onRollPlotPoint} />
          </Grid>
        ))}
        <Grid size={12}>
          <Button variant="contained" onClick={() => props.onAddPlotPointClick(props.index)}>
            Add Plot Point
          </Button>
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
