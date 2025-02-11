import React, { useState } from "react";
// MUI Components
import Grid from "@mui/material/Grid2";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Box from "@mui/material/Box";
import { Add } from "@mui/icons-material";
// Components
import TurningPointForm from "../../molecules/TurningPointForm/TurningPointForm";
import ThemeSelect from "../../atoms/ThemeSelect/ThemeSelect";
// MUI Icons
import ShuffleIcon from "@mui/icons-material/Shuffle";
import CloseIcon from "@mui/icons-material/Close";
// Models
import { Theme } from "../../../models/enums";
// Utils
import { getEnumNameByValue, shuffleArray } from "../../../utils/utils";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/stores";
import { addTurningPoint, updateState } from "../../../redux/reducers/adventureReducer";
// Style
import "./AdventureSheet.css";

const AdventureSheet: React.FC = () => {
  const dispatch = useDispatch();
  const adventure = useSelector((state: RootState) => state.adventure);
  const [snackbarState, setSnackbarState] = useState({ open: false, message: "" });
  const [selectedTab, setSelectedTab] = React.useState<number>(0);
  console.log("[ADVENTURE]", adventure);
  const randomizeThemes = () => {
    const themes = Object.keys(Theme);
    const keys = themes.slice(0, themes.length / 2).map((k) => parseInt(k));
    const shuffledValues = shuffleArray(keys);
    dispatch(updateState({ theme1: shuffledValues[0], theme2: shuffledValues[1], theme3: shuffledValues[2], theme4: shuffledValues[3], theme5: shuffledValues[4] }));
  };

  const handleOnChange = (evt: any) => {
    const name = evt.target.name;
    const value = evt.target.value;
    dispatch(updateState({ ...adventure, [name]: value }));
  };

  const handleOnSubmit = (evt) => {
    evt.preventDefault();
    const jsonString = JSON.stringify(adventure, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `save.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleOnAddTurningPointClick = () => {
    dispatch(addTurningPoint());
  };

  const handleOnSnackbarClose = () => {
    setSnackbarState({ open: false, message: "" });
  };

  const handleOnRollPlotPointClick = () => {
    const themeRoll = Math.ceil(Math.random() * 10);
    const plotPointRoll = Math.ceil(Math.random() * 100);
    let themeResult = Theme.Action;
    if (themeRoll <= 4) {
      themeResult = adventure.theme1!;
    } else if (themeRoll <= 7) {
      themeResult = adventure.theme2!;
    } else if (themeRoll <= 9) {
      themeResult = adventure.theme3!;
    } else {
      themeResult = adventure.theme4!;
    }
    setSnackbarState({ open: true, message: `Theme: ${getEnumNameByValue(Theme, themeResult)}, Plot Point: ${plotPointRoll}` });
  };

  return (
    <div className="AdventureSheet">
      <form onSubmit={handleOnSubmit}>
        <Grid container spacing={2}>
          <Grid size={8} >
            <FormControl>
              <Input placeholder="Name" id="name" name="name" aria-describedby="helper-name" value={adventure.name} onChange={handleOnChange} />
            </FormControl>
            <div style={{ margin: "8px 0" }} />
            <FormControl>
              <TextField placeholder="Notes" id="notes" name="notes" aria-describedby="helper-notes" multiline value={adventure.notes} onChange={handleOnChange} />
            </FormControl>
          </Grid>
          <Grid size={4}>
            <FormControl>
              <Input placeholder="Date" id="date" name="date" aria-describedby="helper-date" value={adventure.date} onChange={handleOnChange} />
            </FormControl>
            <div style={{ margin: "8px 0", display: "flex", alignItems: "center", justifyContent: " space-between", color: "white", background: "black", padding: 8, borderRadius: 5, textAlign: "left" }}>
              <h3 style={{ margin: 0 }}>Themes</h3>
              <IconButton aria-label="randomize" size="small" onClick={randomizeThemes}>
                <ShuffleIcon style={{ color: " white" }} />
              </IconButton>
            </div>
            <FormControl style={{ width: "100%" }}>
              <ThemeSelect id="theme1" name="theme1" value={adventure.theme1} onChange={handleOnChange} />
            </FormControl>
            <div style={{ margin: "8px 0" }} />
            <FormControl style={{ width: "100%" }}>
              <ThemeSelect id="theme2" name="theme2" value={adventure.theme2} onChange={handleOnChange} />
            </FormControl>
            <div style={{ margin: "8px 0" }} />
            <FormControl style={{ width: "100%" }}>
              <ThemeSelect id="theme3" name="theme3" value={adventure.theme3} onChange={handleOnChange} />
            </FormControl>
            <div style={{ margin: "8px 0" }} />
            <FormControl style={{ width: "100%" }}>
              <ThemeSelect id="theme4" name="theme4" value={adventure.theme4} onChange={handleOnChange} />
            </FormControl>
            <div style={{ margin: "8px 0" }} />
            <FormControl style={{ width: "100%" }}>
              <ThemeSelect id="theme5" name="theme5" value={adventure.theme5} onChange={handleOnChange} />
            </FormControl>
          </Grid>
          <Grid size={12}>
            <TabContext value={selectedTab}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={(_evt, newValue) => setSelectedTab(newValue)} aria-label="lab API tabs example">
                  {adventure.turningPoints.map((tp, index) => (
                    <Tab key={tp.id} label={index + 1} value={index} />
                  ))}
                  <Tab onClick={handleOnAddTurningPointClick} label={<Add color="primary" />} />
                </TabList>
              </Box>
              {adventure.turningPoints.map((tp, index) => (
                <TabPanel key={tp.id} value={index}>
                  <TurningPointForm id={tp.id} index={index} values={tp} onRollPlotPoint={handleOnRollPlotPointClick} />
                </TabPanel>
              ))}
            </TabContext>
          </Grid>
          <Grid size={6}>
            <Button type="submit" color="primary">
              Save
            </Button>
          </Grid>
          <Grid size={6}>
            <Button color="secondary">Load</Button>
          </Grid>
        </Grid>
      </form>
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
