import store, { cartAction } from '../store/Mg';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity,description, total, price,id } = props.item;
  function handleAdd(){
    store.dispatch(cartAction.addItem({title,price,description,id}))
  }
  function handleRemove(){
    store.dispatch(cartAction.removeItem({id,quantity,price}))
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}{id}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={handleRemove}>-</button>
          <button onClick={handleAdd}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
