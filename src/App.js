import { Routes, Route } from "react-router-dom";
import { About } from "./component/About";
import { Navbar } from "./component/Navbar";
import { Templates } from "./component/Templates";
import { Myresumes } from "./component/Myresumes";
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
