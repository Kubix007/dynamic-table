import { Box, Paper } from "@mui/material";
import styled from "styled-components";
import backgroundImage from "./img/backgroundImage.jpg";

export const Container = styled(Box)`
  width: 100%;
  background: url(${backgroundImage});
  display: flex;
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
  height: 100vh;
`;

export const PaperLayout = styled(Paper)`
  &.MuiPaper-root {
    padding: 20px;
    max-width: 960px;
    height: fit-content;
  }
`;
