import React from "react";
import { IPlotPoint } from "../../../models/PlotPoint";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid2";
import Input from "@mui/material/Input";

interface IProps {
  index: number;
  values: IPlotPoint;
  onValueChange: (index: number, key: string, value: any) => void;
}

const PlotPointForm: React.FC<IProps> = (props) => {
  const handleOnChange = (evt) => {
    props.onValueChange(props.index, evt.target.name, evt.target.value);
  };
  return (
    <div className="PlotPointForm">
      <Grid container spacing={2}>
        <Grid size={6}>
          <FormControl>
            <Input id="event" name="event" aria-describedby="helper-event" value={props.values.event} onChange={handleOnChange} />
          </FormControl>
        </Grid>
        <Grid size={6}>
          <FormControl>
            <Input id="characters" name="characters" aria-describedby="helper-characters" value={props.values.characters} onChange={handleOnChange} />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default PlotPointForm;
