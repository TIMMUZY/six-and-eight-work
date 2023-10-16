import { Button } from "react-bootstrap";
import classes from './Booklist.module.css';

const BooklistItem = ({ book ,onHandler}) => {
  const { id, title, author, price, imgUrl } = book;

  return (
    <li className={classes.list_item} >
      <div className={classes.list_item_cover}>
        <img src={imgUrl} alt="book-image" />
      </div>

      <div className={classes.list_item_details}>
        <h4>{title}</h4>
        <div>{author}</div>
        <div className={classes.list_item_price}>{price}$</div>
        <Button onClick={onHandler}>Add to card</Button>

      </div>
    </li>
  );
};

export default BooklistItem;
