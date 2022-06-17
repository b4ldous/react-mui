import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Lorem from "../Lorem";

const Fluid = () => {
  return (
    <Box>
      <Container maxWidth="xs">
        <Typography variant="h3"> MaxWidth = 'xs'</Typography>
        <Lorem />
      </Container>
      <Container maxWidth="sm">
        <Typography variant="h3"> MaxWidth = 'sm'</Typography>
        <Lorem />
      </Container>
      <Container maxWidth="md">
        <Typography variant="h3"> MaxWidth = 'md'</Typography>
        <Lorem />
      </Container>
      <Container maxWidth="lg">
        <Typography variant="h3"> MaxWidth = 'lg'</Typography>
        <Lorem />
      </Container>
      <Container maxWidth="xl">
        <Typography variant="h3"> MaxWidth = 'xl'</Typography>
        <Lorem />
      </Container>
      <Container fixed>
        <Typography variant="h3"> Fixed</Typography>
        <Lorem />
      </Container>
    </Box>
  );
};

export default Fluid;
