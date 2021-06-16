import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import React, { useState } from "react";
import { useEffect } from "react";
import IProduct from "./utils/ProductInterface";

const ProductsList = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productCount, setProductCount] = useState(0);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [maxPrice, setMaxPrice] = useState();
  useEffect(() => {
    const url =
      "http://localhost:3333/products?maxprice=1000&present=true&page=28";
    const requestProducts = async (url: string) => {
      const requestedProducts = await fetch(url, {
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
      });
      return requestedProducts.json();
    };
    requestProducts(url).then(
      (data) => setProducts(data.items),
      (err) => console.log(err)
    );
  }, []);

  return (
    <List>
      {products.map((prod) => (
        <ListItem divider key={prod._id}>
          <p>{prod.name}</p>
          <p>Available: {prod.count}</p>
          <p>Price: {prod.price}</p>
        </ListItem>
      ))}
    </List>
  );
};
export default ProductsList;
