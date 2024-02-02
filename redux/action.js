import product from "@/app/prd/men/shirts/[id]/Product";

export const openMenu = (isOpenMenu) => ({
  type: "close/open",
  payload: isOpenMenu,
});
export const addToCart = (product) => ({
  type: "prd/addToCart",
  payload: product,
});
export const removeFromCart = (product) => ({
  type: "prd/removeFromCart",
  payload: product,
});
export const incrementQuantity = (product) => ({
  type: "prd/incrementQuantity",
  payload: product,
});
export const decrementQuantity = (product) => ({
  type: "prd/decrementQuantity",
  payload: product,
});
export const clearCart = () => ({
  type: "prd/clearCart",
});
export const setTotal = (total) => ({
  type: "prd/setTotal",
  payload: total,
});
