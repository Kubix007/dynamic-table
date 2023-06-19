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
    width: 1000px;
    height: 100%;
    @media screen and (max-width: 1070px) {
      width: 455px;
    }
    @media screen and (max-width: 590px) {
      width: 240px;
      margin-right: 0px !important;
    }
  }
`;

export const BookImage = styled(Grid)`
  &.MuiGrid-root {
    @media screen and (max-width: 1070px) {
      margin-left: 20px;
      flex-direction: column;
    }
  }
`;

export const Image = styled.img`
    @media screen and (max-width: 1070px) {
      width: 150px;
      height: 180px;
    }
     @media screen and (max-width: 590px) {
      width: 120px;
      height: 150px;
    }
  }
`;

export const BookDetails = styled(Grid)`
  &.MuiGrid-root {
    margin-left: 20px;
    height: 100%;
    width: fit-content;
    margin-top: 0px;
    @media screen and (max-width: 1070px) {
      width: 455px;
    }
    @media screen and (max-width: 590px) {
      width: 240px;
    }
  }
`;

export const Details = styled(Grid)`
  &.MuiGrid-root {
    @media screen and (max-width: 1070px) {
      width: 420px;
    }
    @media screen and (max-width: 590px) {
      width: 240px;
      margin-right: 0px !important;
    }
  }
`;

export const BookInfoTop = styled(Grid)`
  &.MuiGrid-root {
    padding-left: 0px !important;
    @media screen and (max-width: 1070px) {
      width: 420px;
    }
    @media screen and (max-width: 590px) {
      width: 240px;
      margin: 0px !important;
      font-size: 1.5em;
    }
  }
`;

export const BookInfoBottom = styled(Grid)`
  &.MuiGrid-root {
    padding-left: 0px !important;
    margin-top: 10px;
    @media screen and (max-width: 1070px) {
      display: none;
    }
  }
`;

export const BookButtonContainer = styled(Grid)`
  &.MuiGrid-root {
    padding-left: 0px !important;
    text-align: left;
    margin-top: 20px;
    @media screen and (max-width: 1070px) {
      width: 420px;
    }
    @media screen and (max-width: 590px) {
      width: 240px;
      margin-right: 0px !important;
    }
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
    @media screen and (max-width: 1070px) {
      width: 420px;
    }
    @media screen and (max-width: 590px) {
      width: 240px;
      margin: 0px !important;
      font-size: 1.5em;
    }
  }
`;

export const BookAuthor = styled(Typography)`
  &.MuiTypography-root {
    font-family: FiraSans-Light;
    font-size: 1.5em;
    text-align: left;
    @media screen and (max-width: 1070px) {
      width: 420px;
    }
    @media screen and (max-width: 590px) {
      width: 240px;
      margin: 0px !important;
      font-size: 1.1em;
    }
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
    @media screen and (max-width: 1070px) {
      width: 420px;
    }
    @media screen and (max-width: 590px) {
      width: 240px;
    }
  }
`;

export const BookKind = styled(Typography)`
  &.MuiTypography-root {
    font-family: FiraSans-Light;
    font-size: 1.2em;
    text-align: left;
  }
`;
