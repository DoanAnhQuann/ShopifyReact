import SlideCart from "./components/SlideCart";
import ProductsHeader from "./pages/ProductsHeader/ProductsHeader";
import WishList from "./pages/WishList";
import SampleAllCategory from "./samplePages/SampleAllCategory";
import SampleAllProducts from "./samplePages/SampleAllProducts";
import SampleCart from "./samplePages/SampleCart";
import SampleCategoryProducts from "./samplePages/SampleCategoryProducts";
import SampleHome from "./samplePages/SampleHome";
import SampleLoginModal from "./samplePages/SampleLoginModal";
import SampleProductDetail from "./samplePages/SampleProductDetail";
import SampleProfile from "./samplePages/SampleProfile";
import SampleWishList from "./samplePages/SampleWishList";
import useRouteElements from "./useRouteElements";

function App() {
  const routeRElements = useRouteElements()
  return (
    <div>
      {routeRElements}
      {/* <WishList /> */}
      {/* <SampleHome /> */}
      {/* <SampleAllProducts/> */}
      {/* <SampleAllCategory/> */}
      {/* <SampleProductDetail/> */}
      {/* <SampleCategoryProducts /> */}
      {/* <SampleWishList /> */}
      {/* <SampleProfile /> */}
      {/* <SampleCart /> */}
      {/* <SampleLoginModal /> */}
      {/* <SlideCart /> */}
      {/* <ProductsHeader /> */}
    </div>
  );
}

export default App;
