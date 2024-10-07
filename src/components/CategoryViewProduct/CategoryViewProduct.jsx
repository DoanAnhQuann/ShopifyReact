import { Link } from "react-router-dom";
import path from "../../constants/path";

export default function CategoryViewProduct() {
    return (
        <div className="bg-gray-100 dark:bg-slate-600 dark:text-white px-4 py-4 font-karla mr-2 mb-2">
            <div className="text-lg">{"Category 1"}</div>
            <Link
                to={path.productCategory}
                className="hover:underline text-blue-500"
            >
                View products
            </Link>
        </div>
    );
}
