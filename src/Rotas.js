import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Category from "./Pages/Category";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";


export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recent" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/c/:cat" element={<Category />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}