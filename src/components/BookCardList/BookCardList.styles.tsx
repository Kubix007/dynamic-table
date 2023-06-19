import styled from "@emotion/styled";
import { Box, Grid } from "@mui/material";

export const GridContainer = styled(Grid)`
  &.MuiGrid-root {
    height: 330px;
    width: 610px;
    margin-bottom: 10px;
    @media screen and (max-width: 1070px) {
      height: 250px;
      width: 420px;
      margin: 0px !important;
    }
    @media screen and (max-width: 590px) {
      width: 240px;
      height: 230px;
      margin: 1px !important;
    }
  }
`;

export const Container = styled(Box)`
  @media screen and (max-width: 1070px) {
    width: 420px;
    margin: 0px !important;
  }
  @media screen and (max-width: 590px) {
    width: 240px;
    margin: 1px !important;
  }
`;
