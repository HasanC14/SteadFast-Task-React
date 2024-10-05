import large from "/images/1600x400.png";
import medium from "/images/43.png";
import small from "/images/84.png";
const Hero = () => {
  return (
    <div className="relative">
      <picture className="w-full">
        <source media="(max-width: 500px)" srcSet={small} className="w-full" />
        <source media="(max-width: 800px)" srcSet={medium} className="w-full" />
        <img src={large} className="w-full" alt="Hero" />
      </picture>
      <button className="absolute hover:bg-red-600 top-1/2 right-1/4 bg-prime text-white py-3 md:px-5 font-bold lg:px-10 px-2 md:text-lg text-xs rounded-md uppercase">
        Order now
      </button>
    </div>
  );
};

export default Hero;
