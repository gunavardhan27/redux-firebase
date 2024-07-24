import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
let initialState = true
function App() {
  const cart = useSelector(state=>state.cart)
  useEffect(()=>{
    if(initialState){
      initialState=false;
      return
    }
    fetch('https://react-p-ea409-default-rtdb.firebaseio.com/cart.json',{method:'PUT',
      body:JSON.stringify(cart)
    })
  },[cart])
  return (
    <Layout>
      <Cart />
      <Products />
    </Layout>
  );
}

export default App;
