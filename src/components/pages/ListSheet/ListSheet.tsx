import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/stores";
import Slot from "../../molecules/Slot/Slot";
import { updateSlot as updatePlotlineSlot } from "../../../redux/reducers/plotlineListReducer";
import { updateSlot as updateCharacterSlot } from "../../../redux/reducers/plotlineListReducer";
import Grid from "@mui/material/Grid2";


const ListSheet: React.FC = () => {
  const dispatch = useDispatch();
  const plotlineList = useSelector((state: RootState) => state.plotlineList);
  const plotlines = useSelector((state: RootState) => state.plotlines);

  const characterList = useSelector((state: RootState) => state.characterList);
  const characters = useSelector((state: RootState) => state.characters);

  const handleOnPlotlineChange = (slotId: number, plotlineId: number) => {
    dispatch(updatePlotlineSlot({ slotId: slotId, propName: "plotlineId", value: plotlineId }));
  };

  const handleOnCharacterChange = (slotId: number, characterId: number) => {
    dispatch(updateCharacterSlot({ slotId: slotId, propName: "characterId", value: characterId }));
  };

  return (
    <div className="ListSheet">
      <Grid container spacing={2}>
        <Grid size={6}>
          <div style={{ margin: "8px 0", display: "flex", alignItems: "center", justifyContent: "space-between", color: "white", background: "black", padding: 8, borderRadius: 5, textAlign: "left" }}>
            <h3 style={{ margin: 0 }}>Plotlines List</h3>
          </div>
        </Grid>
        <Grid size={6}>
          <div style={{ margin: "8px 0", display: "flex", alignItems: "center", justifyContent: "space-between", color: "white", background: "black", padding: 8, borderRadius: 5, textAlign: "left" }}>
            <h3 style={{ margin: 0 }}>Characters List</h3>
          </div>
        </Grid>
        <Grid size={6}>
          {plotlineList.map((slot) => (
            <Slot id={slot.plotlineId} list={plotlines} slot={slot} key={slot.id} onChange={(id: number) => handleOnPlotlineChange(slot.id, id)} />
          ))}
        </Grid>
        <Grid size={6}>
          {characterList.map((slot) => (
            <Slot id={slot.characterId} list={characters} slot={slot} key={slot.id} onChange={(id: number) => handleOnCharacterChange(slot.id, id)} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ListSheet;
