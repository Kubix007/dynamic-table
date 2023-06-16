import { Card, CardActionArea, CardMedia, Typography } from "@mui/material";
import styled from "styled-components";
import * as Types from "./BookCard.types";

export const BookImage = styled(CardMedia)<Types.ICardMediaProps>`
  &.MuiCardMedia-img {
    width: 150px;
  }
`;

export const BookTitle = styled(Typography)<Types.ITypographyProps>`
  &.MuiTypography-root {
    font-family: FiraSans-Bold;
    font-size: ${(props) => (props.text.length > 34 ? "0.9em" : "1em")};
    text-align: left;
  }
`;

export const BookAuthor = styled(Typography)`
  &.MuiTypography-root {
    font-family: FiraSans-Light;
    font-size: 1em;
    text-align: left;
  }
`;

export const BookCard = styled(Card)`
  &.MuiCard-root {
    height: 330px;
    margin-left: 1px;
  }
`;

export const BookCardAction = styled(CardActionArea)`
  &.MuiCardActionArea-root {
    height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
