
import Products from "../Products";

export default function WishList() {
    return (
        <div className="container mx-auto font-karla min-h-[83vh]">
            <div className="flex flex-col justify-center items-center p-8">
                <img src="/emptyCart.jpg" className="w-60" alt="empty" />
                <p className="text-center text-xl font-semibold my-2 dark:text-white">
                    Your wishlist is empty
                </p>
            </div>
            <hr />
            <div className="container mt-8 mx-auto px-4 dark:bg-slate-800">
                <div className="sm:flex items-center justify-between">
                    <h2 className="text-4xl font-medium font-lora dark:text-white">
                        Your Wishlist
                    </h2>
                </div>
                <Products />
            </div>
        </div>
    );
}
