import {
  Stack,
  Breadcrumbs as BreadcrumbMui,
  Link,
  Typography,
} from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { remove } from "diacritics";

const Breadcrumbs = () => {
  const { bookDetails } = useSelector((state: RootState) => state.selectedBook);
  const { filters } = useSelector((state: RootState) => state.filter);

  return (
    <Stack>
      <BreadcrumbMui
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
        data-testid="breadcrumb-testid"
      >
        <Link underline="hover" color="inherit" href="/">
          Książki
        </Link>
        {filters.kind ? (
          <Link
            underline="hover"
            color="inherit"
            href={`/ksiazki/${remove(filters.kind)}`}
          >
            {filters.kind[0].toUpperCase() + filters.kind.slice(1)}
          </Link>
        ) : null}
        {filters.genre && filters.kind ? (
          <Link
            underline="hover"
            color="inherit"
            href={`/ksiazki/${remove(filters.kind)}/${remove(filters.genre)}`}
          >
            {filters.genre[0].toUpperCase() + filters.genre.slice(1)}
          </Link>
        ) : null}
        <Typography color="text.primary">{bookDetails?.title}</Typography>
      </BreadcrumbMui>
    </Stack>
  );
};

export default Breadcrumbs;
