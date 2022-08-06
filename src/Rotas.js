import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import SportsFitness from "./Pages/SportsFitness";
import NotFound from "./Pages/NotFound";


export default () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recent" element={<Home />} />
      <Route path="/sports-fitness" element={<SportsFitness />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}