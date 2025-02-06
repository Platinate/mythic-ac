import React from "react";
import { SlotType } from "../../../models/enums";
import { ISlot } from "../../../models/Slot";
import Grid from "@mui/material/Grid2";
import Select from "@mui/material/Select";
import { IListItem } from "../../../models/ListItem";
import MenuItem from "@mui/material/MenuItem";

interface IProps {
    slot:ISlot;
    id?:number;
    list: IListItem[];
}

const Slot:React.FC<IProps> = ({slot, list, id}) => {
    return (<div className="Slot">
        <Grid container spacing={2} alignItems="center">
            <Grid size={2}>
                {slot.startRange}-{slot.endRange}
            </Grid>
            <Grid size={10}>
                {slot.slotType === SlotType.New ? <Select style={{width: "100%"}} label="New" value={id}>{list.map(item => <MenuItem value={item.id}>{item.name}</MenuItem>)}</Select> : <Select style={{width: "100%"}} label="Pick more logical" value={id}>{list.map(item => <MenuItem value={item.id}>{item.name}</MenuItem>)}</Select>}
            </Grid>
        </Grid>
    </div>)
}

export default Slot;