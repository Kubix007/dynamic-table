import { Box, Paper } from "@mui/material";
import styled from "styled-components";
import backgroundImage from "./img/backgroundImage.jpg";

export const Container = styled(Box)`
  width: 100%;
  background: url(${backgroundImage});
  display: grid;
  align-items: center;
  justify-content: center;
  background-attachment: fixed;
  height: 100vh;
  grid-template-rows: 0.5fr 0.5fr;
`;

export const ContentPaper = styled(Paper)`
  &.MuiPaper-root {
    padding: 20px;
    max-width: 1000px;
    height: fit-content;
    margin-top: 10px;
    @media screen and (max-width: 1070px) {
      width: 455px;
    }
    @media screen and (max-width: 590px) {
      width: 260px;
    }
  }
`;

export const HeaderPaper = styled(Paper)`
  &.MuiPaper-root {
    padding: 20px;
    width: 1000px;
    height: fit-content;
    display: flex;
    @media screen and (max-width: 1070px) {
      width: 455px;
    }
    @media screen and (max-width: 590px) {
      width: 260px;
    }
  }
`;
