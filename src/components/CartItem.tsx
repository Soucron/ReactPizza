import {useAppDispatch} from '../redux/store.ts';
import {cartActions} from '../redux/slices/cartSlice.ts';

type CartItemType = {
     id: number,
     title: string,
     price: number,
     count: number,
     imageUrl: string
     type: string,
     size: number
}

export const CartItem = ({ id, title, price, type,  count, imageUrl, size} : CartItemType) => {

    const dispatch = useAppDispatch()

    const onClickPlus = () => {
        dispatch(cartActions.plusItem({id}))
    }

    const onClickMinus = () => {
            dispatch(cartActions.removeItem( {id}))
    }

    const onClickRemovePizzaType = () => {
        dispatch(cartActions.removePizza( {id}))
    }

  return (
      <div className="cart__item">
          <div className="cart__item-img">
              <img
                  className="pizza-block__image"
                  src={imageUrl}
                  alt="Pizza"
              />
          </div>
          <div className="cart__item-info">
              <h3>{title}</h3>
              <p>{type}, {size} см.</p>
          </div>
          <div className="cart__item-count">
              <button onClick={onClickMinus} className="button button--outline button--circle cart__item-count-minus">
                  <img src={'src/assets/img/trash.svg'}/>
              </button>
              <b>{count}</b>
              <button onClick={onClickPlus} className="button button--outline button--circle cart__item-count-plus">
                  <img src={'src/assets/img/plus.svg'}/>
              </button>
          </div>
          <div className="cart__item-price">
              <b>{price*count} ₽</b>
          </div>
          <div className="cart__item-remove">
              <button onClick={onClickRemovePizzaType} className="button button--outline button--circle">
                  <img src={'src/assets/img/trash.svg'}/>
              </button>
          </div>
      </div>
  )
}