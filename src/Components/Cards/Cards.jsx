import React from "react";
import dish1 from "/images/f1.avif";
import dish2 from "/images/f2.avif";
import dish3 from "/images/f3.avif";
import dish4 from "/images/f4.avif";
import Card from "./Card";

const Cards = () => {
  const dishes = [
    {
      image: dish1,
      title: "Chicken Fajitas",
      description:
        "Chicken Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream",
    },
    {
      image: dish2,
      title: "Beef Fajitas",
      description:
        "Beef Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream",
    },
    {
      image: dish3,
      title: "Combo Fajitas",
      description:
        "Combo Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream",
    },
    {
      image: dish4,
      title: "Shrimp Fajitas",
      description:
        "Shrimp Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream",
    },
    {
      image: dish1,
      title: "Veggie Fajitas",
      description:
        "Veggie Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream",
    },
    {
      image: dish2,
      title: "Steak Fajitas",
      description:
        "Steak Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream",
    },
  ];

  return (
    <div>
      <div className="uppercase text-center md:text-4xl text-2xl my-10 font-bold">
        CHILI'S FAVORITES
      </div>
      <div
        className="max-w-7xl mx-auto md:p-0 p-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4


 md:my-10 my-4"
      >
        {dishes.map((dish, index) => (
          <Card key={index} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default Cards;
