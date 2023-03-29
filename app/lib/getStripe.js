import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(`${process.env.stripe_public_key}`);
  }
  return stripePromise;
};

export default getStripe;
