import { ChakraProvider } from '@chakra-ui/react';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Conta from './pages/Conta';
import ContaInfo from './pages/ContaInfo';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/conta/:id' element={<Conta />} />
            <Route path='/infoConta' element={<ContaInfo />} />
          </Routes>
        </Layout>
      </ChakraProvider>

    </BrowserRouter>
  );
}

export default App;
