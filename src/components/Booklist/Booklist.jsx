import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import BooklistItem from "./BooklistItem";
import { fetchAlBooks } from "../../store/creators/booksCreator";
// import { addItemCartFetch } from "../../store/creators/cartCreator";

const Booklist = ({addToCart}) => {
  const { books, status, isErrorBooks } = useSelector((state) => state.books);
  // const [item,setItem] = useState({})
  // const [buttonClickCount, setButtonClickCount] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlBooks());
  }, [dispatch]);

  // useEffect(() => {
  //   if (buttonClickCount!==0) {
  //     dispatch(addItemCartFetch(item));
  //   }
  // }, [buttonClickCount]);
  

  const cases = {
    pending: "loading...",
    rejected: isErrorBooks,
    fulfilled: books?.map((el, idx) => <BooklistItem addTocart={addToCart} book={el} key={`book=${idx}`}/>),
  };
  return <ul>{cases[status]}</ul>;
};


export default Booklist;
