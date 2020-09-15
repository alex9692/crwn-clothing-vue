export const addItemToCart = (cartItems, newItem) => {
  const itemExist = cartItems.find((item) => item.id === newItem.id);
  if (itemExist) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    return [...cartItems, { ...newItem, quantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, newItem) => {
  return cartItems.filter((item) => item.id !== newItem.id);
};

export const subtractItemFromCart = (cartItems, itemToSubtract) => {
  const existingItem = cartItems.find((item) => item.id === itemToSubtract.id);
  if (existingItem.quantity > 1) {
    return cartItems.map((item) =>
      item.id === itemToSubtract.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  } else {
    return cartItems.filter((item) => item.id !== itemToSubtract.id);
  }
};
