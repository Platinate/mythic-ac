import Grid from "@mui/material/Grid2";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/stores";
import { SlotType } from "../../../models/enums";
import Slot from "../../molecules/Slot/Slot";

const ListSheet: React.FC = () => {
  const plotlineList = useSelector((state: RootState) => state.plotlineList);
  const plotlines = useSelector((state: RootState) => state.plotlines);

  return (
    <div className="ListSheet">
      <Grid container spacing={2}>
        <Grid size={6}>
          {plotlineList.map((slot) => (
            <Slot id={slot.plotlineId} list={plotlines} slot={slot} key={slot.id} />
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default ListSheet;
