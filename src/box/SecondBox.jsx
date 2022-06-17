import { Box, Button } from "@mui/material";
import React from "react";

const SecondBox = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box component="span" sx={{ p: 2, border: "1px dashed grey" }}>
        <Button>Save</Button>
      </Box>

      <Button sx={{ border: "1px dashed grey" }}>Save</Button>

      <Box component="button" sx={{ border: "1px dashed grey" }}>
        Save
      </Box>
    </Box>
  );
};

export default SecondBox;
