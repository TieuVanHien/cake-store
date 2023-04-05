import { useStateContext } from "../context/StateContext";

test("adds an item to the cart", () => {
  const { onAdd } = useStateContext();

  const product = {
    _id: 1,
    name: "Product 1",
    price: 10,
  };
  const qty = 1;

  onAdd(product, qty);

  expect(cartItems).toHaveLength(1);
  expect(cartItems[0]).toEqual({
    _id: 1,
    name: "Product 1",
    price: 10,
    quantity: 1,
  });
});
