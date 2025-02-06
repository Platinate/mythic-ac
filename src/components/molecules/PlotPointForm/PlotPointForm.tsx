import React from "react";
import { IPlotPoint } from "../../../models/PlotPoint";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid2";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/stores";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import MenuItem from "@mui/material/MenuItem";
import { updatePlotPoint } from "../../../redux/reducers/adventureReducer";

interface IProps {
  turningPointId: number;
  name: string;
  values: IPlotPoint;
  onRollPlotPoint: () => void;
}

const PlotPointForm: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();
  const characters = useSelector((state: RootState) => state.characters);

  const handleOnChange = (evt) => {
    dispatch(updatePlotPoint({turningPointId: props.turningPointId, propName: props.name, values: {...props.values, [evt.target.name] : evt.target.value }}));
  };

  return (
    <div className="PlotPointForm">
      <Grid container spacing={2}>
        <Grid size={1}>
          <Button onClick={props.onRollPlotPoint} variant="outlined">
            Roll
          </Button>
        </Grid>
        <Grid size={5}>
          <FormControl>
            <Input id="event" name="event" aria-describedby="helper-event" value={props.values.event} onChange={handleOnChange} />
          </FormControl>
        </Grid>
        <Grid size={6}>
          <FormControl>
            <Select
              size="small"
              name="charactersInvoked"
              id="charactersInvoked"
              multiple
              value={props.values.charactersInvoked}
              onChange={handleOnChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {characters.map((character) => (
                <MenuItem key={character.id} value={character.id}>
                  {character.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default PlotPointForm;
