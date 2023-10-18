import updateItem from "./updateItem";


const updateOrder = ({ books, cart, quantity, dispatch, bookId }) => {
    const book = books.find(({ id }) => id === bookId);
    const item = cart.find(({ id }) => id === bookId);
    updateItem({item, book, quantity, dispatch, cart})
};

export default updateOrder;