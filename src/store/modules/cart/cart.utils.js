export const addItemToCart = (cartItems, newItem) => {
  const itemExist = cartItems.find((item) => item.id === newItem.id);
  if (itemExist) {
    return cartItems.map((item) => {
      if (item.id === newItem.id) {
        return { ...item, quantity: item.quantity + 1 };
      } else {
        return item;
      }
    });
  } else {
    return [...cartItems, { ...newItem, quantity: 1 }];
  }
};
