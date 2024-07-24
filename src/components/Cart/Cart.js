import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useEffect,useState } from 'react';
//import store from '../store/Mg';

const Cart = (props) => {
  const cartItems = useSelector(state=>state.cart)
  const [val,set] = useState([])
  const data = useSelector(state=>state.tog.toggle)
  useEffect(()=>{
    async function fetchData(){
      const response = await fetch('https://react-p-ea409-default-rtdb.firebaseio.com/cart.json',{method:'GET'})
      if(!response.ok){
        //..
      }
      const items = await response.json()
      set(items)
    }
    fetchData()
  },[])
  console.log(val)
  return <>(
    {data ? <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {val.map((item)=>(
          <CartItem
          item={{ title: 'Test Item', quantity: item.quantity,description:item.description, total:item.total , price: item.price,id:item.itemId }}
          />

        ))}
      </ul>
    </Card>:null}
  );</>
};

export default Cart;
