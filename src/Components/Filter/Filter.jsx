import { useState, useEffect } from "react";
import dish1 from "/images/f1.avif";
import dish2 from "/images/f2.avif";
import dish3 from "/images/f3.avif";
import dish4 from "/images/f4.avif";
import Card from "../Cards/Card";

const Filter = () => {
  const allDishes = [
    {
      image: dish1,
      title: "Chicken Fajitas",
      description:
        "Chicken Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream",
      category: "Chicken",
    },
    {
      image: dish2,
      title: "Beef Fajitas",
      description:
        "Beef Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream",
      category: "Beef",
    },
    {
      image: dish3,
      title: "Combo Fajitas",
      description:
        "Combo Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream",
      category: "Combo",
    },
    {
      image: dish4,
      title: "Shrimp Fajitas",
      description:
        "Shrimp Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream",
      category: "Seafood",
    },
    {
      image: dish1,
      title: "Veggie Fajitas",
      description:
        "Veggie Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream",
      category: "Vegetarian",
    },
    {
      image: dish2,
      title: "Steak Fajitas",
      description:
        "Steak Fajitas served with rice and beans, tortillas, guacamole, salsa and sour cream",
      category: "Beef",
    },
  ];

  const [dishes, setDishes] = useState(allDishes);
  const [Active, setActive] = useState("All");

  const categories = [
    "All",
    "Chicken",
    "Beef",
    "Combo",
    "Seafood",
    "Vegetarian",
  ];

  useEffect(() => {
    if (Active === "All") {
      setDishes(allDishes);
    } else {
      const selectedDish = allDishes.filter((dish) => dish.category === Active);
      setDishes(selectedDish);
    }
  }, [Active]);

  return (
    <div>
      <div className="uppercase text-center md:text-4xl text-2xl my-10 font-bold">
        Filter
      </div>

      {/* Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActive(category)}
            className={`px-4 py-2 rounded-md ${
              Active === category
                ? "bg-prime text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="max-w-7xl mx-auto md:p-0 p-4 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 md:my-10 my-4">
        {dishes.map((dish, index) => (
          <Card key={index} dish={dish} />
        ))}
      </div>
    </div>
  );
};

export default Filter;
