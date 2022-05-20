import { Box } from "@mui/material";
import FirstAppBar from "./components/FirstAppBar";
import FourthAppBar from "./components/FourthAppBar";
import SecondAppBar from "./components/SecondAppBar";
import ThirdAppBar from "./components/ThirdAppBar";




function App() {
  return (
    <>

    <h1>AppBar</h1>   
    <Box sx={{margin: '10px'}}>
      <p>color: 'default', 'inherit', 'transparent', 'primary' and 'secondary</p>
      <p>position: 'fixed'(default), 'sticky', 'static', 'absolut', 'relative'</p>
    <FirstAppBar/>
    <SecondAppBar/>

    <h2>AppBar layout wit sx property</h2>
    <ThirdAppBar/>
    <h2>Temporary drawer from mui</h2>
    <FourthAppBar/>
    
    


    </Box>
    


    </>
  );
}

export default App;
