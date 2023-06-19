import { Grid, Typography } from "@mui/material";
import { ReactComponent as NoImage } from "./../../img/noImage.svg";
import styled from "styled-components";

export const NoImageError = styled(NoImage)`
  height: 500px;
  width: 360px;
`;

export const BooksDetailsContainer = styled(Grid)`
  &.MuiGrid-root {
    width: 100%;
    width: 1020px;
    height: 100%;
  }
`;

export const BookImage = styled(Grid)`
  &.MuiGrid-root {
  }
`;

export const BookDetails = styled(Grid)`
  &.MuiGrid-root {
    margin-left: 20px;
    height: 100%;
    width: fit-content;
    margin-top: 0px;
  }
`;

export const BookInfoTop = styled(Grid)`
  &.MuiGrid-root {
    padding-left: 0px !important;
  }
`;

export const BookInfoBottom = styled(Grid)`
  &.MuiGrid-root {
    padding-left: 0px !important;
    margin-top: 10px;
  }
`;

export const BookButtonContainer = styled(Grid)`
  &.MuiGrid-root {
    padding-left: 0px !important;
    text-align: left;
    margin-top: 20px;
  }
`;

export const OtherBooks = styled(Grid)`
  &.MuiGrid-root {
    padding-left: 0px !important;
    text-align: left;
    margin-top: 10px;
  }
`;

export const BookTitle = styled(Typography)`
  &.MuiTypography-root {
    font-family: FiraSans-Bold;
    font-size: 1.9em;
    text-align: left;
  }
`;

export const BookAuthor = styled(Typography)`
  &.MuiTypography-root {
    font-family: FiraSans-Light;
    font-size: 1.5em;
    text-align: left;
  }
`;

export const BookGenre = styled(Typography)`
  &.MuiTypography-root {
    font-family: FiraSans-Light;
    font-size: 1.2em;
    text-align: left;
  }
`;

export const OtherBooksInfo = styled(Typography)`
  &.MuiTypography-root {
    font-family: FiraSans-Light;
    font-size: 1em;
    text-align: left;
  }
`;

export const BookKind = styled(Typography)`
  &.MuiTypography-root {
    font-family: FiraSans-Light;
    font-size: 1.2em;
    text-align: left;
  }
`;
