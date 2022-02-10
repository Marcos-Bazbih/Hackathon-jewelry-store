import { BrowserRouter, Route, Routes  } from "react-router-dom";
import SideBar from "./components/parts/Sidebar/Sidebar";
import Footer from "./components/parts/Footer/Footer";
import Header from "./components/parts/Header/Header";
import Home from"./components/pages/Home/Home";
import Cart from "./components/pages/cart/cart";

const AppRouter = () => {
  return (
    <BrowserRouter >
      <Header />    
      <SideBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/" element={<Home />} />
      </Routes>   
      <Footer />
    </BrowserRouter>
  );
};
export default AppRouter;
