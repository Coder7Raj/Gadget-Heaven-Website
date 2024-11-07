import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoIosCart } from "react-icons/io";
import { IoIosHeartEmpty } from "react-icons/io";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../../Context/Context";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [wishlish, setWishlist] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart, addToWish } = useContext(CartContext);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/products.json");
      const products = await response.json();
      const foundProduct = products.find((item) => item.id == id);
      setProduct(foundProduct);
      setLoading(false);
    };

    fetchProducts();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  const getAllCart = () => {
    const all = localStorage.getItem("cart");

    if (all) {
      const cart = JSON.parse(all);
      return cart;
    } else {
      console.log([]);
      return [];
    }
  };
  const handleAdd = async () => {
    const cart = getAllCart();
    const isExist = cart.find((item) => item.id == product.id);
    if (isExist)
      return toast.warn("Product already exists!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast.success(`You have set ${product.title} to your wish list,`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    addToCart(product);
  };

  const addWish = async () => {
    const wishAll = localStorage.getItem("wish");

    let wish = wishAll ? JSON.parse(wishAll) : [];

    const isExist = wish.find((item) => item.id === product.id);
    if (isExist)
      return toast.warn("Product already exists!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

    wish.push(product);
    localStorage.setItem("wish", JSON.stringify(wish));

    toast.success(`You have set ${product.title} to your wish list,`, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    addToWish(product);
  };

  const {
    title,
    image,
    price,
    description,
    Specification,
    availability,
    rating,
  } = product;
  return (
    <div className="pb-[360px]">
      <ToastContainer />

      <div className="bg-[#9538E2] relative flex items-center justify-center text-white pb-72">
        {/* Text Section */}
        <div className="text-center space-y-4 pt-20 px-4">
          <h1 className="text-3xl font-bold">Product Details</h1>
          <p>
            Product Details provides in-depth information, specifications, and
            features to help customers make informed purchasing decisions.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4 lg:flex-row hero absolute top-[35%] left-1/2 transform -translate-x-1/2 z-0 lg:w-[85%] md:w-[90%] w-[95%] lg:h-[500px] md:h-[500px] h-[610px] p-2 border border-white bg-white rounded-lg">
        <div className="w-8/12 h-full">
          <img
            src={image}
            className="lg:w-full md:w-full lg:h-full md:h-full w-full h-36 rounded-lg shadow-2xl"
          />
        </div>
        <div className="flex flex-col gap-2 justify-start items-start">
          <h1 className="lg:text-xl text-lg font-bold">{title}</h1>
          <p className="lg:text-lg text-base font-bold">price: ${price}</p>
          <div>
            {availability ? (
              <button className="text-green-700 p-1 rounded-xl text-base outline-none border border-green-600 bg-green-100">
                In Stock
              </button>
            ) : (
              <button className="text-red-700 p-1 rounded-xl text-base outline-none border border-red-600 bg-red-100">
                Out of Stock
              </button>
            )}
          </div>
          <p className="text-base text-gray-500">{description}</p>
          <ul className="list-decimal list-inside pl-2 w-full">
            <p className="font-bold lg:text-xl text-base">Specification:</p>
            {Specification.map((item, index) => (
              <li
                className="mb-1 lg:text-base text-sm text-gray-500"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
          <div>
            <div className="flex items-center">
              <span className="text-base font-bold mr-1">Rating:</span>
              <span className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </span>
            </div>
            <div className="rating flex items-center">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
              <span className="p-2 bg-gray-200 rounded-full border-none outline-none">
                {rating}
              </span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Link
              onClick={() => handleAdd()}
              className="bg-[#9538E2] rounded-xl border-none outline-none"
            >
              <button className="lg:p-2 p-1 flex items-center lg:space-x-2 space-x-1">
                <span className="text-white font-bold">Add To Cart</span>
                <span className="text-lg text-white font-bold">
                  <IoIosCart />
                </span>
              </button>
            </Link>
            <Link onClick={() => addWish()}>
              <button className="p-2 border border-slate-500 rounded-full font-bold text-xl">
                <IoIosHeartEmpty />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
