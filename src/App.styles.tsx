import { Box, Paper } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box)`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 10px;
  text-align: -webkit-center;
  height: 100vh;
`;

export const PaperLayout = styled(Paper)`
  &.MuiPaper-root {
    padding: 20px;
  }
`;
