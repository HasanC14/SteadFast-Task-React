import large from "/images/1600x400.png";
import medium from "/images/43.png";
import small from "/images/84.png";

const Banner = () => {
  return (
    <div className="relative">
      <picture className="w-full">
        <source media="(max-width: 500px)" srcSet={small} className="w-full" />
        <source media="(max-width: 800px)" srcSet={medium} className="w-full" />
        <img src={large} className="w-full" alt="Banner" />
      </picture>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center lg:text-4xl md:text-2xl text-xl font-bold">
        Get <span className="text-red-500">FREE</span> Chips & Salsa or a
        Non-Alcoholic Beverage* by signing up for My Chili's Rewards®!
        <div className="flex flex-col justify-center items-center my-4 space-y-4">
          <button className="lg:text-xl text-md text-xs bg-red-600 text-white hover:scale-110 py-3 px-10 font-bold transition-all ease-in-out duration-500 rounded-md uppercase md:block hidden">
            JOIN MY CHILI'S REWARDS
          </button>
          <button className="lg:text-xl text-md text-xs bg-white text-red-600 hover:scale-110 py-3 px-10 font-bold transition-all ease-in-out duration-500 rounded-md uppercase md:block hidden">
            LOG IN TO MY CHILI'S REWARDS
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
