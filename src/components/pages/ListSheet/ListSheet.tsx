import Grid from "@mui/material/Grid2";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/stores";
import { SlotType } from "../../../models/enums";
import Slot from "../../molecules/Slot/Slot";

const ListSheet: React.FC = () => {
  const plotlineList = useSelector((state: RootState) => state.plotlineList);
  const plotlines = useSelector((state: RootState) => state.plotlines);
  
  const characterList = useSelector((state: RootState) => state.characterList);
  const characters = useSelector((state: RootState) => state.characters);

  return (
    <div className="ListSheet">
      <Grid container spacing={2}>
        <Grid size={6}>
          <div style={{ margin: "8px 0", display: "flex", alignItems: "center", justifyContent: " space-between", color: "white", background: "black", padding: 8, borderRadius: 5, textAlign: "left" }}>
            <h3 style={{ margin: 0 }}>Plotlines</h3>
          </div>
        </Grid>
        <Grid size={6}>
          <div style={{ margin: "8px 0", display: "flex", alignItems: "center", justifyContent: " space-between", color: "white", background: "black", padding: 8, borderRadius: 5, textAlign: "left" }}>
            <h3 style={{ margin: 0 }}>Characters</h3>
          </div>
        </Grid>
        <Grid size={6}>
          {plotlineList.map((slot) => (
            <Slot id={slot.plotlineId} list={plotlines} slot={slot} key={slot.id} />
          ))}
        </Grid>
        <Grid size={6}>
          {characterList.map((slot) => (
            <Slot id={slot.characterId} list={characters} slot={slot} key={slot.id} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ListSheet;
