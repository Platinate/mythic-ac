import React, { useState } from "react";
// MUI Components
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Snackbar from "@mui/material/Snackbar";
// Components
import TurningPointForm from "../../molecules/TurningPointForm/TurningPointForm";
// MUI Icons
import ShuffleIcon from "@mui/icons-material/Shuffle";
import CloseIcon from "@mui/icons-material/Close";
// Models
import { Theme } from "../../../models/enums";
import { IAdventureSheet, AdventureSheetModel } from "../../../models/AdventureSheet";
import { TurningPointModel } from "../../../models/TurningPoint";
import { PlotPointModel } from "../../../models/PlotPoint";
// Utils
import { getEnumNameByValue, shuffleArray } from "../../../utils/utils";
// Style
import "./AdventureSheet.css";

const AdventureSheet: React.FC = () => {
  const [sheet, setSheet] = useState<IAdventureSheet>(new AdventureSheetModel());
  const [snackbarState, setSnackbarState] = useState({ open: false, message: "" });

  const randomizeThemes = () => {
    const themes = Object.keys(Theme);
    const keys = themes.slice(0, themes.length / 2).map((k) => parseInt(k));
    const shuffledValues = shuffleArray(keys);
    console.log(shuffledValues);
    setSheet((sheet) => ({ ...sheet, theme1: shuffledValues[0], theme2: shuffledValues[1], theme3: shuffledValues[2], theme4: shuffledValues[3], theme5: shuffledValues[4] }));
  };

  const handleOnChange = (evt: any) => {
    const name = evt.target.name;
    const value = evt.target.value;
    setSheet((sheet) => ({ ...sheet, [name]: value }));
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    const jsonString = JSON.stringify(sheet, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `save.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleOnAddTurningPointClick = () => {
    setSheet((sheet) => ({ ...sheet, turningPoints: [...sheet.turningPoints, new TurningPointModel()] }));
  };

  const handleOnTurningPointValueChange = (index: number, key: string, value: any) => {
    const sheetToUpdate = { ...sheet };
    sheetToUpdate.turningPoints[index][key] = value;
    setSheet(sheetToUpdate);
  };

  const handleOnAddPlotPointClick = (index: number) => {
    const sheetToUpdate = { ...sheet };
    sheetToUpdate.turningPoints[index].plotPoints.push(new PlotPointModel());
    setSheet(sheetToUpdate);
  };

  const handleOnPlotPointValueChange = (turningPointIndex: number, plotPointIndex: number, key: string, value: any) => {
    const sheetToUpdate = { ...sheet };
    sheetToUpdate.turningPoints[turningPointIndex].plotPoints[plotPointIndex][key] = value;
    setSheet(sheetToUpdate);
  };

  const handleOnSnackbarClose = () => {
    setSnackbarState({ open: false, message: "" });
  };

  const handleOnRollPlotPointClick = () => {
    const themeRoll = Math.ceil(Math.random() * 10);
    const plotPointRoll = Math.ceil(Math.random() * 100);
    let themeResult = Theme.Action;
    if (themeRoll <= 4) {
      themeResult = sheet.theme1!;
    } else if (themeRoll <= 7) {
      themeResult = sheet.theme2!;
    } else if (themeRoll <= 9) {
      themeResult = sheet.theme3!;
    } else {
      themeResult = sheet.theme4!;
    }
    setSnackbarState({ open: true, message: `Theme: ${getEnumNameByValue(Theme, themeResult)}, Plot Point: ${plotPointRoll}` });
  };

  return (
    <div className="AdventureSheet">
      <Paper style={{ padding: 16 }}>
        <form onSubmit={handleOnSubmit}>
          <Grid container spacing={2}>
            <Grid size={8} direction="column">
              <FormControl>
                <Input placeholder="Name" id="name" name="name" aria-describedby="helper-name" value={sheet.name} onChange={handleOnChange} />
              </FormControl>
              <div style={{ margin: "8px 0" }} />
              <FormControl>
                <TextField placeholder="Notes" id="notes" name="notes" aria-describedby="helper-notes" multiline value={sheet.notes} onChange={handleOnChange} />
              </FormControl>
            </Grid>
            <Grid size={4}>
              <FormControl>
                <Input placeholder="Date" id="date" name="date" aria-describedby="helper-date" value={sheet.date} onChange={handleOnChange} />
              </FormControl>
              <div style={{ margin: "8px 0", display: "flex", alignItems: "center", justifyContent: " space-between", color: "white", background: "black", padding: 4, textAlign: "left" }}>
                <h3 style={{ margin: 0 }}>Themes</h3>
                <IconButton aria-label="randomize" size="small" onClick={randomizeThemes}>
                  <ShuffleIcon style={{ color: " white" }} />
                </IconButton>
              </div>
              <FormControl style={{ width: "100%" }}>
                <Select size="small" id="theme1" name="theme1" value={sheet.theme1} onChange={handleOnChange}>
                  <MenuItem value={Theme.Action}>Action</MenuItem>
                  <MenuItem value={Theme.Tension}>Tension</MenuItem>
                  <MenuItem value={Theme.Mystery}>Mystery</MenuItem>
                  <MenuItem value={Theme.Personal}>Personal</MenuItem>
                  <MenuItem value={Theme.Social}>Social</MenuItem>
                </Select>
              </FormControl>
              <div style={{ margin: "8px 0" }} />
              <FormControl style={{ width: "100%" }}>
                <Select size="small" id="theme2" name="theme2" value={sheet.theme2} onChange={handleOnChange}>
                  <MenuItem value={Theme.Action}>Action</MenuItem>
                  <MenuItem value={Theme.Tension}>Tension</MenuItem>
                  <MenuItem value={Theme.Mystery}>Mystery</MenuItem>
                  <MenuItem value={Theme.Personal}>Personal</MenuItem>
                  <MenuItem value={Theme.Social}>Social</MenuItem>
                </Select>
              </FormControl>
              <div style={{ margin: "8px 0" }} />
              <FormControl style={{ width: "100%" }}>
                <Select size="small" id="theme3" name="theme3" value={sheet.theme3} onChange={handleOnChange}>
                  <MenuItem value={Theme.Action}>Action</MenuItem>
                  <MenuItem value={Theme.Tension}>Tension</MenuItem>
                  <MenuItem value={Theme.Mystery}>Mystery</MenuItem>
                  <MenuItem value={Theme.Personal}>Personal</MenuItem>
                  <MenuItem value={Theme.Social}>Social</MenuItem>
                </Select>{" "}
              </FormControl>
              <div style={{ margin: "8px 0" }} />
              <FormControl style={{ width: "100%" }}>
                <Select size="small" id="theme4" name="theme4" value={sheet.theme4} onChange={handleOnChange}>
                  <MenuItem value={Theme.Action}>Action</MenuItem>
                  <MenuItem value={Theme.Tension}>Tension</MenuItem>
                  <MenuItem value={Theme.Mystery}>Mystery</MenuItem>
                  <MenuItem value={Theme.Personal}>Personal</MenuItem>
                  <MenuItem value={Theme.Social}>Social</MenuItem>
                </Select>{" "}
              </FormControl>
              <div style={{ margin: "8px 0" }} />
              <FormControl style={{ width: "100%" }}>
                <Select size="small" id="theme5" name="theme5" value={sheet.theme5} onChange={handleOnChange}>
                  <MenuItem value={Theme.Action}>Action</MenuItem>
                  <MenuItem value={Theme.Tension}>Tension</MenuItem>
                  <MenuItem value={Theme.Mystery}>Mystery</MenuItem>
                  <MenuItem value={Theme.Personal}>Personal</MenuItem>
                  <MenuItem value={Theme.Social}>Social</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            {sheet.turningPoints.map((value, index) => (
              <Grid size={12} key={index}>
                <Divider />
                <TurningPointForm index={index} values={value} onValueChange={handleOnTurningPointValueChange} onAddPlotPointClick={handleOnAddPlotPointClick} onPlotPointValueChange={handleOnPlotPointValueChange} onRollPlotPoint={handleOnRollPlotPointClick} />
              </Grid>
            ))}
            <Grid size={12}>
              <Button onClick={handleOnAddTurningPointClick}>Add Turning Point</Button>
            </Grid>
            <Grid size={6}>
              <Button type="submit" color="primary">Save</Button>
            </Grid>
            <Grid size={6}>
              <Button color="secondary">Load</Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Snackbar
        open={snackbarState.open}
        autoHideDuration={6000}
        onClose={handleOnSnackbarClose}
        message={snackbarState.message}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleOnSnackbarClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default AdventureSheet;
