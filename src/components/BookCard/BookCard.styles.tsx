import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";
import * as Types from "./BookCard.types";

export const BookImage = styled(CardMedia)<Types.ICardMediaProps>`
  &.MuiCardMedia-img {
    width: 150px;
    @media screen and (max-width: 1070px) {
      width: 135px;
      height: 155px;
    }
    @media screen and (max-width: 590px) {
      width: 110px;
      height: 150px;
    }
  }
`;

export const BookTitle = styled(Typography)<Types.ITypographyProps>`
  &.MuiTypography-root {
    font-family: FiraSans-Bold;
    font-size: ${(props) => (props.text.length > 34 ? "0.9em" : "1em")};
    text-align: left;
    @media screen and (max-width: 1070px) {
      font-size: ${(props) => (props.text.length > 34 ? "0.7em" : "0.8em")};
    }
    @media screen and (max-width: 590px) {
      font-size: ${(props) => (props.text.length > 34 ? "0.6em" : "0.7em")};
    }
  }
`;

export const BookAuthor = styled(Typography)`
  &.MuiTypography-root {
    font-family: FiraSans-Light;
    font-size: 1em;
    text-align: left;
    @media screen and (max-width: 1070px) {
      font-size: 0.8em;
    }
    @media screen and (max-width: 590px) {
      font-size: 0.7em;
    }
  }
`;

export const BookCard = styled(Card)`
  &.MuiCard-root {
    height: 330px;
    margin-left: 1px;
    @media screen and (max-width: 1070px) {
      width: 135px;
      height: 240px;
    }
    @media screen and (max-width: 590px) {
      width: 110px;
      height: 230px;
    }
  }
`;

export const BookCardAction = styled(CardActionArea)`
  &.MuiCardActionArea-root {
    height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    @media screen and (max-width: 1070px) {
      width: 135px;
      height: 240px;
    }
    @media screen and (max-width: 590px) {
      width: 110px;
      height: 230px;
    }
  }
`;
