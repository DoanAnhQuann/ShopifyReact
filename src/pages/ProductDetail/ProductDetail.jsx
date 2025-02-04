import { AiOutlineShoppingCart } from "react-icons/ai";
import RatingStar from "../../components/RatingStart";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import Reviews from "../../components/Reviews";
import Products from "../Products";

export default function ProductDetail() {
    const product = {
        id: 6,
        title: "Calvin Klein CK One",
        description:
          "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
        category: "fragrances",
        price: 49.99,
        discountPercentage: 0.32,
        rating: 4.85,
        stock: 17,
        tags: ["fragrances", "perfumes"],
        brand: "Calvin Klein",
        sku: "DZM2JQZE",
        weight: 5,
        dimensions: {
          width: 11.53,
          height: 14.44,
          depth: 6.81,
        },
        warrantyInformation: "5 year warranty",
        shippingInformation: "Ships overnight",
        availabilityStatus: "In Stock",
        reviews: [
          {
            rating: 5,
            comment: "Great value for money!",
            date: "2024-05-23T08:56:21.619Z",
            reviewerName: "Sophia Brown",
            reviewerEmail: "sophia.brown@x.dummyjson.com",
          },
          {
            rating: 3,
            comment: "Very disappointed!",
            date: "2024-05-23T08:56:21.619Z",
            reviewerName: "Madison Collins",
            reviewerEmail: "madison.collins@x.dummyjson.com",
          },
          {
            rating: 1,
            comment: "Poor quality!",
            date: "2024-05-23T08:56:21.619Z",
            reviewerName: "Maya Reed",
            reviewerEmail: "maya.reed@x.dummyjson.com",
          },
        ],
        returnPolicy: "No return policy",
        minimumOrderQuantity: 20,
        meta: {
          createdAt: "2024-05-23T08:56:21.619Z",
          updatedAt: "2024-05-23T08:56:21.619Z",
          barcode: "2210136215089",
          qrCode: "https://assets.dummyjson.com/public/qr-code.png",
        },
        images: [
          "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
          "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png",
        ],
        thumbnail:
          "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
      };
    return (
        <div className="container mx-auto pt-8 dark:text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 font-karla">
          <div className="space-y-2">
            <img src={product.images[0]} alt="selected" className="h-80" />
            <div className="flex space-x-1 items-center">
              {product.images.map((_img, index) => (
                <img
                  src={_img}
                  key={_img}
                  alt="thumb"
                  className={`w-12 cursor-pointer hover:border-2 hover:border-black ${
                    index === 0 ? "border-2 border-black" : ""
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="px-2">
            <h2 className="text-2xl">{product?.title}</h2>
            {product?.rating && <RatingStar rating={product?.rating} />}
            <div className="mt-1">
              <div className="leading-3">
                <h2 className="font-medium text-blue-500 text-xl">
                  ${(99.99).toFixed(2)}
                </h2>
                <span className="mr-2 text-sm line-through opacity-70 dark:text-white">
                  ${99}
                </span>
                <span className="text-sm font-semibold dark:text-white">
                  -{10}%
                </span>
              </div>
            </div>
            <table className="mt-2">
              <tbody>
                <tr>
                  <td className="pr-2 font-bold">Brand</td>
                  <td>{product?.brand}</td>
                </tr>
                <tr>
                  <td className="pr-2 font-bold">Category</td>
                  <td>{product?.category}</td>
                </tr>
                <tr>
                  <td className="pr-2 font-bold">Stock</td>
                  <td>{product?.stock}</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-2">
              <h2 className="font-bold">About the product</h2>
              <p className="leading-5">
                {product?.description}
              </p>
            </div>
            <div className="flex flex-wrap items-center mt-4 mb-2 space-x-2">
              <button
                type="button"
                className="flex items-center space-x-1 mb-2 hover:bg-pink-700 text-white p-2 rounded bg-pink-500"
              >
                <AiOutlineShoppingCart />
                <span>ADD TO CART</span>
              </button>
              <button
                type="button"
                className="flex items-center space-x-1 mb-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
              >
                <FaHandHoldingDollar />
                <span>BUY NOW</span>
              </button>
              <button
                type="button"
                className="flex items-center space-x-1 mb-2 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-700"
              >
                <MdFavoriteBorder />
                <span>ADD TO WISHLIST</span>
              </button>
            </div>
          </div>
          {product && <Reviews />}
        </div>
        <hr className="mt-4" />
        {/* Similar Products */}
        <div className="container mt-8 mx-auto px-4 dark:bg-slate-800">
          <div className="sm:flex items-center justify-between">
            <h2 className="text-4xl font-medium font-lora dark:text-white">
              New Arrivals
            </h2>
          </div>
          <Products />
        </div>
        <br />
      </div>
    ) 

}
