import { Link, useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { title, image, price, id } = product || {};
  const navigate = useNavigate();

  const handleDetails = (di) => {
    // Navigate to the product details page using the product ID
    navigate(`/productDetails/${di}`);
  };

  return (
    <div className="flex flex-col bg-white p-4 rounded-lg">
      <figure className="flex justify-center items-center border border-gray-200 rounded-lg w-full h-full overflow-hidden">
        <img className="rounded-lg h-48" src={image} alt={title} />
      </figure>
      <div className="flex flex-col gap-2 p-2">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="font-bold">Price: ${price}</p>
        <Link>
          <button
            onClick={() => handleDetails(id)} // Pass the product ID to the handler
            className="p-2 rounded-xl font-bold border border-[#9538E2] outline-none active:bg-[#9538E2]"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
