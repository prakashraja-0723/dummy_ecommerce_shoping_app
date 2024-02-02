const initialState = {
  products: [],
  isOpenMenu: false,
  cartTotal: 0,
  isToggleCheck: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "prd/addToCart":
      return {
        ...state,
        products: state.products.some((item) => item.id === action.payload.id)
          ? state.products.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    quantity: item.quantity,
                    price:
                      item.quantity === 1
                        ? item.price
                        : item.price + item.price / item.quantity,
                  }
                : item,
            )
          : [...state.products, action.payload],
      };
    case "close/open":
      return {
        ...state,
        isOpenMenu: !state.isOpenMenu, // Toggle isOpenMenu state
      };
    case "prd/removeFromCart":
      return {
        ...state,
        products: state.products.filter(
          (item) => item.id !== action.payload.id,
        ),
        cartTotal: state.products.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        ),
      };
    case "prd/incrementQuantity":
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: item.quantity + 1,
                price: item.price + item.price / item.quantity,
              }
            : item,
        ),
        cartTotal: state.products.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        ),
      };
    case "prd/decrementQuantity":
      return {
        ...state,
        products: state.products.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                quantity: Math.max(1, item.quantity - 1),
                price:
                  item.price - item.price / item.quantity === 0
                    ? item.price
                    : item.price - item.price / item.quantity,
              }
            : item,
        ),
        cartTotal: state.products.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0,
        ),
      };
    case "prd/clearCart":
      return {
        ...state,
        products: [],
      };
    case "prd/setTotal":
      return {
        ...state,
        cartTotal: state.products.reduce(
          (acc, item) => acc + (item.price * item.quantity) / item.quantity,
          0,
        ),
      };
    default:
      return state;
  }
};
// enn
