import { Box } from "@mui/material";
import { ReactComponent as NoFoundImage } from "../../img/noFound.svg";
import * as Styles from "./NoMatch.styles";

const NoMatch = () => {
  return (
    <Box>
      <NoFoundImage width={1020} />
      <Styles.NoMatchInfo>Opps! Coś poszło nie tak :/</Styles.NoMatchInfo>
    </Box>
  );
};

export default NoMatch;
