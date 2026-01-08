
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetailes from './pages/ProductDetailes';


const App = () => {


  return (
<div>
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='/products' element={<Products  />} />
  <Route path='/products/:productId' element={<ProductDetailes />} />
</Routes>
</div>
  );
};

export default App;