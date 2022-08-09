import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Contact from "./Pages/Contact";
import Motion from "./Pages/Motion";
import NotFound from "./Pages/NotFound";


function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recent" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/motion" element={<Motion />} />
      <Route path="/c/:cat" element={<Category />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Rotas;