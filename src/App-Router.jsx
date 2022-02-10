import { BrowserRouter, Route, Routes  } from "react-router-dom";
import SideBar from "./components/parts/Sidebar/Sidebar";
import Footer from "./components/parts/Footer/Footer";
import Header from "./components/parts/Header/Header";
import Home from"./components/pages/Home/Home";
import Cart from "./components/pages/cart/cart";
import Earring from "./components/pages/earring/Earring";
import Rings from "./components/pages/rings/Rings";
import Watches from "./components/pages/watches/Watches";
import Necklaces from "./components/pages/necklaces/Necklaces";

const AppRouter = () => {
  return (
    <BrowserRouter >
      <Header />    
      <SideBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Cart" element={<Cart />} />
        <Route exact path="/" element={<Earring />} />
        <Route exact path="/Rings" element={<Rings />} />
        <Route exact path="/Necklaces" element={<Necklaces />} />
        <Route exact path="/Watches" element={<Watches />} />
      </Routes>   
      <Footer />
    </BrowserRouter>
  );
};
export default AppRouter;
