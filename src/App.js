import { Route, Routes } from "react-router-dom";
import DetailsFillingPage from "./pages/DetailsFillingPage";
import Notfound from "./components/error/Notfound";
import About from "./pages/About";


function App() {
  return (
   

    <Routes>
      <Route path="/" element={<DetailsFillingPage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Notfound />} />

    </Routes>
  
  );
}

export default App;
