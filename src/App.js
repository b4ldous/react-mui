import { Box, CssBaseline } from "@mui/material";
import FirstBox from "./box/FirstBox";
import SecondBox from "./box/SecondBox";

function App() {
  return (
    <>
      <CssBaseline />
      <Box>
        <FirstBox />
        <SecondBox />
      </Box>
    </>
  );
}

export default App;
