import React from "react";
import Header from "./Header";
import Card from "./Card";
import "./style/Home.css";

function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className="Card_Container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </React.Fragment>
  );
}

export default Home;
