import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Nav from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';

function Contact() {
   return <h1>Contact</h1>;
}

function Cart() {
   return <h1>Cart</h1>;
}

function App() {
   return (
      <Routes>
         <Route path='/' element={<Nav />}>
            <Route index element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/auth' element={<Authentication />} />
            <Route path='/cart' element={<Cart />} />
         </Route>
      </Routes>
   );
}

export default App;
