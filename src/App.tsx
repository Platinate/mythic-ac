import React, { lazy, Suspense } from "react";
import "./App.css";
import Tab from "@mui/material/Tab";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Paper } from "@mui/material";
import { ToastContainer } from "react-toastify";

const AdventureSheet = lazy(() => import("./components/pages/AdventureSheet/AdventureSheet"));
const ListSheet = lazy(() => import("./components/pages/ListSheet/ListSheet"));
const Setup = lazy(() => import("./components/pages/Setup/Setup"));

const App: React.FC = () => {
  const [selectedSheet, setSelectedSheet] = React.useState<"adventure" | "list" | "setup">("adventure");
  return (
    <div className="App">
      <Paper style={{ padding: 16, width: "95%", margin: "0 auto" }}>
        <TabContext value={selectedSheet}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={(_evt, value) => setSelectedSheet(value)} centered>
              <Tab label="Adventure" value="adventure" />
              <Tab label="List" value="list" />
              <Tab label="Setup" value="setup" />
            </TabList>
          </Box>
          <Suspense fallback={<p>Loading...</p>}>
            <TabPanel value="adventure">
              <AdventureSheet />
            </TabPanel>
            <TabPanel value="list">
              <ListSheet />
            </TabPanel>
            <TabPanel value="setup">
              <Setup/>
            </TabPanel>
          </Suspense>
        </TabContext>
      </Paper>
      <ToastContainer autoClose={2000} limit={3} />
    </div>
  );
};

export default App;
