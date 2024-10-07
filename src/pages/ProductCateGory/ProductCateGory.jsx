import CategoryViewProduct from "../../components/CategoryViewProduct";


export default function ProductCateGory() {
    return (
        <div className="container mx-auto min-h-[83vh] p-4 font-karla">
            <span className="text-lg dark:text-white">Categories</span>
            <div className="grid xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 my-2">
                <CategoryViewProduct />
            </div>
        </div>
    );
}
