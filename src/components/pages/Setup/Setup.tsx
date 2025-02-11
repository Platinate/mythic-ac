import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/stores";
import Chip from "@mui/material/Chip";
import Grid from "@mui/material/Grid2";
import { Box, Button, IconButton, Input, Modal, Typography } from "@mui/material";
import { addPlotline, deletePlotline } from "../../../redux/reducers/plotlinesReducer";
import { removePlotline } from "../../../redux/reducers/plotlineListReducer";
import Add from "@mui/icons-material/Add";
import { IPlotline } from "../../../models/Plotline";
import { generateRandomId } from "../../../utils/utils";
import { addCharacter, deleteCharacter } from "../../../redux/reducers/charactersReducer";
import { ICharacter } from "../../../models/Character";
import { removeCharacter } from "../../../redux/reducers/characterListReducer";

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

const Setup: React.FC = () => {
  const dispatch = useDispatch();
  const plotlines = useSelector((state: RootState) => state.plotlines);
  const characters = useSelector((state: RootState) => state.characters);
  const [characterModalState, setCharacterModalState] = useState({ open: false, text: "" });
  const [plotlineModalState, setPlotlineModalState] = useState({ open: false, text: "" });

  const handleOnPlotlineDeleteClick = (id: number) => {
    dispatch(deletePlotline(id));
    dispatch(removePlotline(id));
  };

  const handleOnCharacterDeleteClick = (id: number) => {
    dispatch(deleteCharacter(id));
    dispatch(removeCharacter(id));
  };

  const handleOnPlotlineAddClick = () => {
    const newPlotline: IPlotline = { id: generateRandomId(), name: plotlineModalState.text };
    dispatch(addPlotline(newPlotline));
    setPlotlineModalState({ open: false, text: "" });
  };

  const handleOnCharacterAddClick = () => {
    const newCharacter: ICharacter = { id: generateRandomId(), name: characterModalState.text };
    dispatch(addCharacter(newCharacter));
    setCharacterModalState({ open: false, text: "" });
  };

  return (
    <div className="Setup">
      <Grid container spacing={2}>
        <Grid size={12}>
          <h4>Plotlines</h4>
        </Grid>
        <Grid size={12}>
          {plotlines.map((pl) => (
            <Chip key={pl.id} label={pl.name} onDelete={() => handleOnPlotlineDeleteClick(pl.id)} style={{marginRight: 8}} />
          ))}
          <IconButton size="small" onClick={() => setPlotlineModalState({ open: true, text: "" })}>
            <Add />
          </IconButton>
        </Grid>
        <Grid size={12}>
          <h4>Characters</h4>
        </Grid>
        <Grid size={12}>
          {characters.map((ch) => (
            <Chip key={ch.id} label={ch.name} onDelete={() => handleOnCharacterDeleteClick(ch.id)} style={{marginRight: 8}} />
          ))}
          <IconButton size="small" onClick={() => setCharacterModalState({ open: true, text: "" })}>
            <Add />
          </IconButton>
        </Grid>
      </Grid>
      <Modal open={plotlineModalState.open} onClose={() => setPlotlineModalState({ open: false, text: "" })} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter a new plotline name:
          </Typography>
          <Input value={plotlineModalState.text} placeholder="Plotline name" onChange={(evt) => setPlotlineModalState({ open: true, text: evt.target.value })} />
          <Button color="success" onClick={handleOnPlotlineAddClick}>
            Confirm
          </Button>
        </Box>
      </Modal>
      <Modal open={characterModalState.open} onClose={() => setCharacterModalState({ open: false, text: "" })} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter a new character name:
          </Typography>
          <Input value={characterModalState.text} placeholder="Character name" onChange={(evt) => setCharacterModalState({ open: true, text: evt.target.value })} />
          <Button color="success" onClick={handleOnCharacterAddClick}>
            Confirm
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default Setup;
