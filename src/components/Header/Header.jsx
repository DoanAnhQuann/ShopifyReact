import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link } from "react-router-dom";
import path from "../../constants/path";
import { useState } from "react";
import Login from "../../pages/Login";
import SlideCart from "../SlideCart";

export default function Header() {
  const [isOpenLogin, setIsOpenLogin] =  useState(false)
  const [isOpenCart, setIsOpenCart] =  useState(false)
  const handleIsOpenLogin = () =>{
    setIsOpenLogin(!isOpenLogin)
  }
  const handleIsOpenCart = () =>{
    setIsOpenCart(!isOpenCart)
  }
  return (
    <div className="py-4 bg-white dark:bg-slate-800 top-0 sticky z-10 shadow-lg font-karla">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <Link to={path.home}
          className="text-4xl font-bold dark:text-white"
          data-test="main-logo"
        >
          Shopify
        </Link>
        <div className="lg:flex hidden w-full max-w-[500px]">
          <input
            type="text"
            placeholder="Search for a product..."
            className="border-2 border-blue-500 px-6 py-2 w-full dark:text-white dark:bg-slate-800"
          />
          <div className="bg-blue-500 text-white text-[26px] grid place-items-center px-4">
            <BsSearch />
          </div>
        </div>
        <div className="flex gap-4 md:gap-8 items-center dark:text-white">
          <Link to={path.products} className="text-xl font-bold" data-test="main-products">
            Products
          </Link>
          <Link to={path.category} className="text-xl font-bold" data-test="main-categories">
            Categories
          </Link>
          <div className="flex items-center gap-2">
            <img
              src="https://robohash.org/Terry.png?set=set4"
              alt="avatar"
              className="w-6"
            />
            <FaUser className="text-gray-500 text-2xl dark:text-white" />
            <div className="text-gray-500 text-2xl">
              <button onClick={handleIsOpenLogin}
                className="cursor-pointer hover:opacity-85 dark:text-white"
                data-test="login-btn"
              >
                Login
              </button>
            </div>
          </div>
          {isOpenLogin && <Login handleIsOpen={handleIsOpenLogin} />}
          <div
            className="text-gray-500 text-[32px] relative hover:cursor-pointer hover:opacity-80"
            data-test="cart-btn"
          >
            <button onClick={handleIsOpenCart}><AiOutlineShoppingCart className="dark:text-white" /></button>
            <div
              className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center"
              data-test="cart-item-count"
            >
              {999}
            </div>
          </div>
          {isOpenCart && <SlideCart handleIsOpenCart = {handleIsOpenCart} />}
          <div className="flex">
            <MdOutlineLightMode className="cursor-pointer" size={30} />
            <MdOutlineDarkMode className="cursor-pointer" size={30} />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
