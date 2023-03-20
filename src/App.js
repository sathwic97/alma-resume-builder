import { Route, Routes } from "react-router-dom";
import DetailsFillingPage from "./pages/DetailsFillingPage";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Notfound from "./component/error/Notfound";
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
