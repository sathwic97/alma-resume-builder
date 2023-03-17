import { Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Navbar } from "./component/Navbar";
import { Templates } from "./pages/Templates";
import { Myresumes } from "./pages/Myresumes";
import './App.css';
import { Container } from "@mui/material";
// import { Container } from "@mui/system";

function App() {
  return (
    
      <Container>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Templates/>}/>
        <Route path="myresumes" element={<Myresumes/>}/>
        <Route path="about" element={<About/>}/>
      </Routes>
      </Container>
    
  );
}

export default App;
