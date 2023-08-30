import {Categories} from '../components/Categories.tsx';
import {Sort} from '../components/Sort.tsx';
import {Skeleton} from '../components/PizzaBlock/Skeleton.tsx';
import {PizzaBlock} from '../components/PizzaBlock';
import {useEffect, useState} from 'react';
import {PizzasType} from '../App.tsx';

export const Home = () => {
    const [pizzas, setPizzas] = useState<PizzasType[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://64ee53381f87218271428632.mockapi.io/items')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setPizzas(data)
            })
            .finally(() => {
                    setIsLoading(false)
                }
            )
    }, []);

    return (<>
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {isLoading
                    ?
                    [...new Array(8)].map((_, index) => <Skeleton key={index}/>)
                    : pizzas.map((pizza) => (<PizzaBlock key={pizza.id} {...pizza}/>))
                }
            </div>
        </>
    )
}