import logo from "./logo.svg";
import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import ProductsList from "./components/ProductsList";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import "@fontsource/roboto";
import Header from "./components/Header";

function App() {
  const [products, setProducts] = useState<String[]>(["aaa", "bbb"]);

  return (
    <React.Fragment>
      <CssBaseline />

      <Header />
      <ProductsList />
      {/* <Container></Container> */}
    </React.Fragment>
  );
}

export default App;
