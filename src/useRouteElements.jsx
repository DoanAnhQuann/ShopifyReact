import { useRoutes } from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import ProductList from "./pages/ProductList/ProductList";
import path from "./constants/path";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import ProductCateGory from "./pages/ProductCateGory";
import ProductsHeader from "./pages/ProductsHeader/ProductsHeader";
import CategoryProduct from "./pages/CategoryProduct";
import Login from "./pages/Login";

export default function useRouteElements() {
    const routeElement = useRoutes([
        {
            path: "/",
            index: true,
            element: (
                <Mainlayout>
                    <ProductList />
                </Mainlayout>
            ),
        },
        {
            path: path.productDetail,
            element: (
                <Mainlayout>
                    <ProductDetail />
                </Mainlayout>
            ),
        },
        {
            path: path.profile,
            element: (
                <Mainlayout>
                    <Profile />
                </Mainlayout>
            ),
        },
        {
            path: path.category,
            element: (
                <Mainlayout>
                    <ProductCateGory />
                </Mainlayout>
            ),
        },
        {
            path: path.products,
            element: (
                <Mainlayout>
                    <ProductsHeader />
                </Mainlayout>
            ),
        },
        {
            path: path.productCategory,
            element: (
                <Mainlayout>
                     <CategoryProduct />
                </Mainlayout>
            ),
        },
        {
            path: path.login,
            element: (
                <Mainlayout>
                     <Login />
                </Mainlayout>
            ),
        },
    ]);

    return routeElement;
}
