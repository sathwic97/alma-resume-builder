
import { Container } from "@mui/material";
import DetailsFillingPage from "./pages/DetailsFillingPage";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

function App() {
  return (
   <Container maxWidth='xl'
    sx={{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',

  }}
   >

    <DetailsFillingPage/>

   </Container>
  );
}

export default App;
