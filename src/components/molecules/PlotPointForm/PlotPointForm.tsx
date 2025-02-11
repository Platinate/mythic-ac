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
import IconButton from "@mui/material/IconButton";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { updatePlotPoint } from "../../../redux/reducers/adventureReducer";
import { Add } from "@mui/icons-material";
import { Character } from "../../../models/Character";
import { generateRandomId } from "../../../utils/utils";
import { addCharacter } from "../../../redux/reducers/charactersReducer";
import { registerCharacter } from "../../../redux/reducers/characterListReducer";

interface IProps {
  turningPointId: number;
  name: string;
  values: IPlotPoint;
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

const PlotPointForm: React.FC<IProps> = (props) => {
  const dispatch = useDispatch();
  const characters = useSelector((state: RootState) => state.characters);
  const [modalState, setModalState] = React.useState({ open: false, text: "" });

  const handleOnChange = (evt) => {
    dispatch(updatePlotPoint({ turningPointId: props.turningPointId, propName: props.name, values: { ...props.values, [evt.target.name]: evt.target.value } }));
  };

  const handleOnCharacterCreateClick = (evt) => {
    const newCharacter = {id: 0, name: ''};
    newCharacter.id = generateRandomId();
    newCharacter.name = modalState.text;
    dispatch(addCharacter(newCharacter));
    dispatch(registerCharacter(newCharacter.id));
    dispatch(updatePlotPoint({ turningPointId: props.turningPointId, propName: props.name, values: { ...props.values, charactersInvoked: [...props.values.charactersInvoked, newCharacter.id] } }));
    setModalState({ open: false, text: "" });
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
        <Grid size={5}>
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
                    <Chip key={value} label={<div>{characters.find((c) => c.id === value)!.name}</div>} />
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
        <Grid size={1}>
          <IconButton color="primary" onClick={() => setModalState({ open: true, text: "" })}>
            <Add />
          </IconButton>
        </Grid>
      </Grid>
      <Modal open={modalState.open} onClose={() => setModalState({ open: false, text: "" })} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter a new character name:
          </Typography>
          <Input value={modalState.text} placeholder="Character name" onChange={(evt) => setModalState({ open: true, text: evt.target.value })} />
          <Button color="success" onClick={handleOnCharacterCreateClick}>
            Confirm
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default PlotPointForm;
