import React from "react";
import "./App.css";
import AdventureSheet from "./components/pages/AdventureSheet/AdventureSheet";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Paper } from "@mui/material";
import ListSheet from "./components/pages/ListSheet/ListSheet";

const App: React.FC = () => {
  const [selectedSheet, setSelectedSheet] = React.useState<"adventure" | "list">("adventure");
  return (
    <div className="App">
      <Paper style={{ padding: 16, width: "95%", margin: "0 auto" }}>
        <TabContext value={selectedSheet}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={(_evt, value) => setSelectedSheet(value)} centered> 
              <Tab label="Adventure" value="adventure" />
              <Tab label="List" value="list" />
            </TabList>
          </Box>
          <TabPanel value="adventure">
            <AdventureSheet />
          </TabPanel>
          <TabPanel value="list">
            <ListSheet />
          </TabPanel>
        </TabContext>
      </Paper>
    </div>
  );
};

export default App;
