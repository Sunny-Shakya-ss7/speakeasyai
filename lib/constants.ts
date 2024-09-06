export const plansMap = [
  {
    id: "starter",
    name: "Free",
    description: "Just sign up and get started with BlabberBlog!",
    price: "0",
    items: ["3 Blog Posts", "3 Transcription"],
    paymentLink: "https://buy.stripe.com/test_8wMg119dr98Y9ri289",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1PvaulFSEgAbR95yKn6KJYFR"
        : "",
  },
  {
    id: "pro",
    name: "Pro",
    description: "All Blog Posts, let’s go!",
    price: "10.00",
    items: ["Unlimited Blog Posts", "Unlimited Transcriptions"],
    paymentLink: "https://buy.stripe.com/test_bIYcOPcpDbh646YeUU",
    priceId:
      process.env.NODE_ENV === "development"
        ? "price_1PvaulFSEgAbR95yXpvktm10"
        : "",
  },
];

export const ORIGIN_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://BlabberBlog.vercel.app";
