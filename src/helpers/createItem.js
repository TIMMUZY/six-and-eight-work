const createItem = (book, item = {}, quantity) => {
    const { count = 0, total = 0 } = item;
    return {
        title: book.title,
        id: book.id,
        count: count + quantity,
        total: total + book.price * quantity,
    };
};

export default createItem;