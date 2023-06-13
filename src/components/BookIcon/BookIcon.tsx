import * as Styles from "./BookIcon.styles";
import * as Types from "./BookIcon.types";

const BookIcon = ({ src, alt }: Types.IProps) => {
  return <Styles.Icon src={src} alt={alt} />;
};

export default BookIcon;
