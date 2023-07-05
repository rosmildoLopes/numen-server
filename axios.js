const axios = require("axios");

const axios = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};


axios()
