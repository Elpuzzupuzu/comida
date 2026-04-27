// ///COMPONENTE PRINCIPAL

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/home/Home";
// import Menu from "./pages/menu/productsMenu/Menu";
// import CategoryProductsPage from "./pages/menu/CategoryProductsPage/CategoryProductsPage";
// import MainLayout from "./layout/mainLayout/MainLayout";
// import { globalStyles } from "./styles/globalStyles";
// import AboutUsPage from "./pages/aboutUs/aboutUsPage";

// export default function App() {
//   return (
//     <>
//       <style>{globalStyles}</style>

//       <BrowserRouter>
//         <Routes>
//           <Route element={<MainLayout />}>
//             <Route path="/" element={<Home />} />
//             <Route path="/menu" element={<Menu />} />
//             <Route path="/menu/:categorySlug" element={<CategoryProductsPage />} />
//             <Route path="/nosotros" element={<AboutUsPage />} />
//             <Route path="/contacto" element={<AboutUsPage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }


///COMPONENTE PRINCIPAL

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/productsMenu/Menu";
import CategoryProductsPage from "./pages/menu/CategoryProductsPage/CategoryProductsPage";
import ProductDetails from "./components/menu/productDetails/productDetails";
import MainLayout from "./layout/mainLayout/MainLayout";
import { globalStyles } from "./styles/globalStyles";
import AboutUsPage from "./pages/aboutUs/aboutUsPage";

export default function App() {
  return (
    <>
      <style>{globalStyles}</style>

      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/menu/:categorySlug" element={<CategoryProductsPage />} />
            <Route path="/menu/:categorySlug/:productId" element={<ProductDetails />} />
            <Route path="/nosotros" element={<AboutUsPage />} />
            <Route path="/contacto" element={<AboutUsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}