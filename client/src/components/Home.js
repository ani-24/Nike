import React, { useEffect, useState } from "react";
import Header from "./Header";
import Card from "./Card";
import "./style/Home.css";

function Home() {
  const [shoes, setShoes] = useState(null);
  useEffect(() => {
    fetch("/shoes")
      .then((response) => response.json())
      .then((data) => {
        setShoes(data);
      });
  }, []);

  return (
    <React.Fragment>
      <Header />
      <div className="Card_Container">
        {shoes?.map((el) => (
          <Card
            key={el._id}
            name={el.name}
            desc={el.desc}
            price={el.price}
            color={el.color}
            img={el.img}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default Home;
