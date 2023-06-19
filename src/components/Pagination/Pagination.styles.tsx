import { Box } from "@mui/material";
import styled from "styled-components";

export const Container = styled(Box)`
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1070px) {
    width: 420px;
    margin-top: 15px;
  }
  @media screen and (max-width: 590px) {
    width: 220px;
  }
`;
