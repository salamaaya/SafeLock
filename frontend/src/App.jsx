import { Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import { Box } from '@chakra-ui/react';


function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Box bg={'#E0CFB6'} minH={'viewport'} minW={'viewport'} fontFamily={'inter'}>
        <Routes>
          <Route path="/" element={ <HomePage /> } />
        </Routes>
      </Box>
    </>
  )
}

export default App;
