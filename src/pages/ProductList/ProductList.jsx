import { MdSupportAgent } from "react-icons/md";
import { RiRefund2Fill } from "react-icons/ri";
import { TbDiscount, TbTruckDelivery } from "react-icons/tb";
import HeroProductList from "../../components/HeroProductList";
import FeaturesProductList from "../../components/FeaturesProductList";
import Products from "../Products/Products";
import Banner from "../../components/Banner";

export default function ProductList() {
    return (
        <div className="dark:bg-slate-800 pb-5">
            {/* Hero  */}
            <HeroProductList />
            {/* Features */}
            <div className="px-4 container grid gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-8 mx-auto">
                <FeaturesProductList
                    descHeader=" Free Delivery"
                    desc="Orders from all item"
                >
                    <TbTruckDelivery className="text-4xl dark:text-white" />
                </FeaturesProductList>
                <FeaturesProductList
                    descHeader=" Return & Refund"
                    desc=" Money back guarantee"
                >
                    <RiRefund2Fill className="text-4xl dark:text-white" />
                </FeaturesProductList>
                <FeaturesProductList
                    descHeader="Member Discount"
                    desc="On order over $99"
                >
                    <TbDiscount className="text-4xl dark:text-white" />
                </FeaturesProductList>
                <FeaturesProductList
                    descHeader="Support 24/7"
                    desc=" Contact us 24 hours a day"
                >
                    <MdSupportAgent className="text-4xl dark:text-white" />
                </FeaturesProductList>
            </div>
            {/* Product list 1 */}
            <div className="container mt-8 mx-auto px-4 dark:bg-slate-800">
                <div className="sm:flex items-center justify-between">
                    <h2 className="text-4xl font-medium font-lora dark:text-white">
                        Trending Products
                    </h2>
                </div>
                <Products />
            </div>
            {/* Banner */}
            <Banner />
            {/* Product list 2 */}
            <div className="container mt-8 mx-auto px-4 dark:bg-slate-800">
                <div className="sm:flex items-center justify-between">
                    <h2 className="text-4xl font-medium font-lora dark:text-white">
                        New Arrivals
                    </h2>
                </div>
                <Products />
            </div>
        </div>
    );
}
