import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BooklistItem from "./BooklistItem";
import { fetchAlBooks } from "../../store/creators/booksCreator";
import { addItemCartFetch } from "../../store/creators/cartCreator";
const Booklist = () => {
  const { books, status, isErrorBooks } = useSelector((state) => state.books);
const [item,setItem] = useState({})
  const [buttonClickCount, setButtonClickCount] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAlBooks());
  }, []);

  useEffect(() => {
    if (buttonClickCount!==0) {
      dispatch(addItemCartFetch(item));
    }
  }, [buttonClickCount]);

  

  const cases = {
    pending: "loading...",
    rejected: isErrorBooks,
    fulfilled: books?.map((el, idx) => (
      <BooklistItem
        book={el}
        key={`book=${idx}`}
        onHandler={() => {
            setItem(el);
            setButtonClickCount((prew)=>prew+1)
        }}
      />
    )),
  };
  return <ul>{cases[status]}</ul>;
};

export default Booklist;
