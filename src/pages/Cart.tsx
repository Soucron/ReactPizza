import {Link} from 'react-router-dom'
import  {memo} from 'react';
import {useSelector} from 'react-redux';
import {AppRootStateType, useAppDispatch} from '../redux/store.ts';
import {CartItem} from '../components/CartItem.tsx';
import {cartActions} from '../redux/slices/cartSlice.ts';
import { CartEmpty } from '../components/CartEmpty.tsx';



export const Cart = memo(() => {
    const dispatch = useAppDispatch()
    const items  = useSelector((state: AppRootStateType) => state.cart.items)
    const totalPrice = useSelector((state: AppRootStateType) => state.cart.totalPrice)
    const totalPizzas = useSelector((state: AppRootStateType) => state.cart.totalPizzas)


    const cleanCartHandler = () => {
        if (window.confirm('Очистить корзину?')){
            dispatch(cartActions.clearItems())
        }

    }

    if (!totalPizzas  ) {
        return  <CartEmpty/>
    }

    return (
        <div className="container container--cart">
            <div className="cart">
                <div className="cart__top">
                    <h2 className="content__title">
                        Корзина
                    </h2>
                    <div onClick={cleanCartHandler} className="cart__clear">
                        <img src={'src/assets/img/trash.svg'}/>
                        <span>Очистить корзину</span>
                    </div>
                </div>
                <div className="content__items">
                    {items.map( (item) => <CartItem key={item.id} {...item}/>)}

                </div>
                <div className="cart__bottom">
                    <div className="cart__bottom-details">
                        <span> Всего пицц: <b>{totalPizzas} шт.</b> </span>
                        <span> Сумма заказа: <b>{totalPrice} ₽</b> </span>
                    </div>
                    <div className="cart__bottom-buttons">
                        <Link to="/" className="button button--outline button--add go-back-btn">
                            <img src={'src/assets/img/grey-arrow-left.svg'}/>
                            <span>Вернуться назад</span>
                        </Link>
                        <div className="button pay-btn">
                            <span>Оплатить сейчас</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

})