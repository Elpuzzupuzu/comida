import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Menu from "./pages/menu/productsMenu/Menu";
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
            <Route path="/nosotros" element={<AboutUsPage />} />
            <Route path="/contacto" element={<AboutUsPage />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}