import { Box, Button, CssBaseline, Stack } from "@mui/material";



function App() {
  return (
    <>
    <CssBaseline/>
    <Box>
      <h1>Buttons MUI</h1>
      <h2>Basic button</h2>
      
      <Button variant="text">variant='tex' (default)</Button>
      <Button variant="contained">variant="contained"</Button>
      <Button variant="outlined">variant="outlined"</Button>

      <h2>Contained button</h2>

      <Button>Primary</Button>
      <Button disabled> disabled</Button>
      <Button href="#google">Link </Button>

      <h2>Disabled elevation</h2>
      <Button variant="contained" disableElevation>
  Disable elevation
</Button>
<h2>Handling clicks </h2>
<Button
  onClick={() => {
    alert('clicked');
  }}
>
  Click me
</Button>

<h2>Colors</h2>
<Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
    </Stack>






    </Box>


    </>
  );
}

export default App;
