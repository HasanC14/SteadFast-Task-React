const Card = ({ dish }) => {
  const { image, title, description } = dish;
  return (
    <div className="p-4 rounded-lg bg-gray-100">
      <div className="overflow-hidden cursor-pointer">
        <img
          src={image}
          alt={title}
          className="hover:scale-110 transition-all ease-in-out duration-700 overflow-hidden"
        />
      </div>
      <div>
        <div className="text-lg font-semibold my-2 px-1 text-start truncate">
          {title}
        </div>
        <div className="text-xs text-gray-600 text-justify line-clamp-3 px-1">
          {description}
        </div>
        <button className="mt-2 px-4 py-2 bg-prime text-white rounded w-full hover:bg-red-600">
          Add to Order
        </button>
      </div>
    </div>
  );
};

export default Card;
