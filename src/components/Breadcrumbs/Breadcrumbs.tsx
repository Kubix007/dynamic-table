import {
  Stack,
  Breadcrumbs as BreadcrumbMui,
  Link,
  Typography,
} from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Breadcrumbs = () => {
  const { bookDetails } = useSelector((state: RootState) => state.selectedBook);
  const { filters } = useSelector((state: RootState) => state.filter);

  return (
    <Stack>
      <BreadcrumbMui
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
      >
        <Link underline="hover" color="inherit" href="/">
          Książki
        </Link>
        {filters.genre ? (
          <Link
            underline="hover"
            color="inherit"
            href={`/ksiazki/${filters.genre.toLowerCase()}`}
          >
            {filters.genre[0].toUpperCase() + filters.genre.slice(1)}
          </Link>
        ) : null}
        {bookDetails?.kinds[0].name ? (
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            {bookDetails?.kinds[0].name}
          </Link>
        ) : null}
        {bookDetails?.authors[0].name ? (
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            {bookDetails?.authors[0].name}
          </Link>
        ) : null}
        <Typography color="text.primary">{bookDetails?.title}</Typography>
      </BreadcrumbMui>
    </Stack>
  );
};

export default Breadcrumbs;
