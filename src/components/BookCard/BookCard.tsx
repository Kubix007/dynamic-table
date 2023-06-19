import { CardContent } from "@mui/material";
import { remove } from "diacritics";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../app/store";
import { setGenre, setKind } from "../../features/filters/filterSlice";
import * as Types from "./BookCard.types";
import * as Styles from "./BookCard.styles";

const BookCard = ({ author, title, image, kind, genre }: Types.IProps) => {
  const dispatch: AppDispatch = useDispatch();
  let navigate = useNavigate();

  const handleClick = () => {
    navigate(
      `/ksiazki/${remove(kind.replaceAll(" ", "-").toLowerCase())}/${remove(
        genre.split(", ")[0].replaceAll(" ", "-").toLowerCase()
      )}/${remove(author.replaceAll(" ", "-").toLowerCase())}/${remove(
        title
          .replaceAll(" ", "-")
          .toLocaleLowerCase()
          .replaceAll("(", "")
          .replaceAll(")", "")
          .replaceAll("!", "")
          .replaceAll(".", "")
      )}`
    );
    dispatch(setGenre(genre.split(", ")[0].replaceAll(" ", "-").toLowerCase()));
    dispatch(setKind(kind.replaceAll(" ", "-").toLowerCase()));
  };

  return (
    <Styles.BookCard sx={{ width: 150 }} onClick={handleClick}>
      <Styles.BookCardAction>
        <Styles.BookImage
          component="img"
          height="200"
          image={image}
          alt={title}
        />
        <CardContent>
          <Styles.BookTitle gutterBottom text={title}>
            {title}
          </Styles.BookTitle>
          <Styles.BookAuthor>{author}</Styles.BookAuthor>
        </CardContent>
      </Styles.BookCardAction>
    </Styles.BookCard>
  );
};

export default BookCard;
