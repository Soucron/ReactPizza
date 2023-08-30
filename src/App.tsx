import './scss/app.scss'
import {Header} from './components/Header.tsx';
import {Categories} from './components/Categories.tsx';
import {Sort} from './components/Sort.tsx';
import {PizzaBlock} from './components/PizzaBlock.tsx';
import {useEffect, useState} from 'react';


export type PizzasType = {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
};
function App() {

    const [pizzas, setPizzas] = useState<PizzasType[]>([])

    useEffect(() => {
        fetch('https://64ee53381f87218271428632.mockapi.io/items')
            .then(res => {
                return res.json()
            })
            .then(data => {
                setPizzas(data)
            })
    }, []);




    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        {
                            pizzas.map((pizza) => (
                                <PizzaBlock key={pizza.id} {...pizza}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App


