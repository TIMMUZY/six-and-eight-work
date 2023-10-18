import { api } from "../api";
import { setCart } from "../store/slices/cartSlice";
import createItem from "./createItem";

const updateItem = async ({ item, cart, book, quantity, dispatch }) => {
    const newItem = createItem(book, item, quantity);

    if (item?.count <= 1 && quantity < 0) {
        await api.deleteCartItem(item.id);
        const filteredCart = cart.filter((el) => el.id !== item.id);
        return dispatch(setCart(filteredCart));
    }
    if(quantity===3){
        await api.deleteCartItem(item.id);
        const filteredCart = cart.filter((el) => el.id !== item.id);
        return dispatch(setCart(filteredCart));
    }

    if (item) {
        await api.editCartItem(newItem);
        const editedElements = cart.map((el) => (el.id === newItem.id ? newItem : el));
        return dispatch(setCart(editedElements));
    }

    const response = await api.createCartItem(newItem);
    dispatch(setCart([...cart, response.data]))

};

export default updateItem;