import { Box, Paper } from "@mui/material";
import styled from "styled-components";
import backgroundImage from "./img/backgroundImage.jpg";

export const Container = styled(Box)`
  width: 100%;
  background: url(${backgroundImage});
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
  height: 100vh;
`;

export const ContentPaper = styled(Paper)`
  &.MuiPaper-root {
    padding: 20px;
    max-width: 1100px;
    height: fit-content;
    margin-top: 10px;
  }
`;

export const HeaderPaper = styled(Paper)`
  &.MuiPaper-root {
    padding: 20px;
    width: 1020px;
    height: fit-content;
    display: flex;
  }
`;
