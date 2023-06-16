import { CardContent } from "@mui/material";
import * as Types from "./BookCard.types";
import * as Styles from "./BookCard.styles";

const BookCard = ({ author, title, image }: Types.IProps) => {
  return (
    <Styles.BookCard sx={{ width: 150 }}>
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
