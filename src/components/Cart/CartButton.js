import { useSelector } from 'react-redux';
import store, { toggleAction } from '../store/Mg';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const items = useSelector(state=>state.cart.totalQuantity)
  const handleToggle = ()=>{
    store.dispatch(toggleAction.toggleButton())
  }
  return (
    <button onClick={handleToggle} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{items}</span>
    </button>
  );
};

export default CartButton;
