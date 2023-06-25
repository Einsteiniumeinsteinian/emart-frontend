import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Home from './onepirate/Home'
import GetProductsUnderCategory from './components/getProductsUnderCategory';
import GetProduct from './components/getProduct';
import SearchedProduct from './components/searchedProduct';
import SignIn from './onepirate/SignIn';
import SignUp from './onepirate/SignUp';
import Cart from './components/cart'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/category' element={<GetProductsUnderCategory />}/>
          <Route path='/search' element={<SearchedProduct />}/>
          <Route path='/:id' element={<GetProduct />}/>
          <Route path='/signIn' element={<SignIn />}/>
          <Route path='/signUp' element={<SignUp/>}/>
          <Route path='/cart' element={<Cart/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
