import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import React, { ReactNode } from "react";
import { Theme } from "../../../models/enums";

interface IProps {
  id?: string;
  name?: string;
  value?: any;
  onChange: (event: SelectChangeEvent<string>, child: ReactNode) => void;
}

const ThemeSelect: React.FC<IProps> = ({ value, id, name, onChange }) => {
  return (
    <Select size="small" id={id} name={name} value={value} onChange={onChange}>
      <MenuItem value={Theme.Action}>Action</MenuItem>
      <MenuItem value={Theme.Tension}>Tension</MenuItem>
      <MenuItem value={Theme.Mystery}>Mystery</MenuItem>
      <MenuItem value={Theme.Personal}>Personal</MenuItem>
      <MenuItem value={Theme.Social}>Social</MenuItem>
    </Select>
  );
};

export default ThemeSelect;
