import React from "react";

import { useDispatch, useSelector } from "react-redux";

import Grid from "@mui/material/Grid2";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import PlotPointForm from "../PlotPointForm/PlotPointForm";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Add from "@mui/icons-material/Add";
import { Delete } from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";

import { ITurningPoint } from "../../../models/TurningPoint";
import { updateTurningPoint, deleteTurningPoint } from "../../../redux/reducers/adventureReducer";
import { RootState } from "../../../redux/stores";
import { addPlotline } from "../../../redux/reducers/plotlinesReducer";
import { IPlotline } from "../../../models/Plotline";
import { generateRandomId } from "../../../utils/utils";
import { registerPlotline } from "../../../redux/reducers/plotlineListReducer";
import { PlotlineStatus } from "../../../models/enums";

import "./TurningPointForm.css";

interface IProps {
  id: number;
  index: number;
  values: ITurningPoint;
  onRollPlotPoint: () => void;
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  color: "black",
  borderRadius: 2,
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  gap: 2,
};

const TurningPointForm: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();
  const plotlines = useSelector((state: RootState) => state.plotlines);
  console.log(props.values, plotlines);
  const [modalState, setModalState] = React.useState({ open: false, text: "" });

  const handleOnChange = (evt) => {
    dispatch(updateTurningPoint({ id: props.id, values: { ...props.values, [evt.target.name]: evt.target.value } }));
  };

  const handleOnDeleteClick = (evt) => {
    dispatch(deleteTurningPoint(props.id));
  };

  const handleOnPlotlineUpdateClick = (evt) => {
    const newPlotline: IPlotline = { id: 0, name: "" };
    newPlotline.id = generateRandomId();
    newPlotline.name = modalState.text;
    dispatch(addPlotline(newPlotline));
    dispatch(registerPlotline(newPlotline.id));
    dispatch(updateTurningPoint({ id: props.id, values: { ...props.values, plotlineId: newPlotline.id } }));
    setModalState({ open: false, text: "" });
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
        <Grid size={1}>Plotline</Grid>
        <Grid size={4}>
          <FormControl>
            <Select size="small" id="plotlineId" name="plotlineId" value={props.values.plotlineId} onChange={handleOnChange}>
              {plotlines.map((pl) => (
                <MenuItem key={pl.id} value={pl.id}>{pl.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={2}>
          <Button startIcon={<Add />} variant="contained" onClick={() => setModalState({ open: true, text: "" })}>
            Add plotline
          </Button>
        </Grid>
        <Grid size={1}>
          <Button variant="contained" color="error" onClick={handleOnDeleteClick}>
            <Delete />
          </Button>
        </Grid>
        <Grid size={6}>
          <h4>Plot Point</h4>
        </Grid>
        <Grid size={6}>
          <h4>Invoked Characters</h4>
        </Grid>
        <Grid size={12}>
          <PlotPointForm values={props.values.plotPoint1} name="plotPoint1" turningPointId={props.values.id} onRollPlotPoint={props.onRollPlotPoint} />
        </Grid>
        <Grid size={12}>
          <PlotPointForm values={props.values.plotPoint2} name="plotPoint2" turningPointId={props.values.id} onRollPlotPoint={props.onRollPlotPoint} />
        </Grid>
        <Grid size={12}>
          <PlotPointForm values={props.values.plotPoint3} name="plotPoint3" turningPointId={props.values.id} onRollPlotPoint={props.onRollPlotPoint} />
        </Grid>
        <Grid size={12}>
          <PlotPointForm values={props.values.plotPoint4} name="plotPoint4" turningPointId={props.values.id} onRollPlotPoint={props.onRollPlotPoint} />
        </Grid>
        <Grid size={12}>
          <PlotPointForm values={props.values.plotPoint5} name="plotPoint5" turningPointId={props.values.id} onRollPlotPoint={props.onRollPlotPoint} />
        </Grid>
        <Grid size={12}>
          <FormControl>
            <TextField placeholder="Notes" id="notes" name="notes" aria-describedby="helper-notes" multiline value={props.values.notes} onChange={handleOnChange} />
          </FormControl>
        </Grid>
      </Grid>
      <Modal open={modalState.open} onClose={() => setModalState({ open: false, text: "" })} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter a new plotline name:
          </Typography>
          <Input value={modalState.text} placeholder="Plotline name" onChange={(evt) => setModalState({ open: true, text: evt.target.value })} />
          <Button color="success" onClick={handleOnPlotlineUpdateClick}>
            Confirm
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default TurningPointForm;
