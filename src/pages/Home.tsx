import {Categories} from '../components/Categories.tsx';
import {Sort} from '../components/Sort.tsx';
import {Skeleton} from '../components/PizzaBlock/Skeleton.tsx';
import {PizzaBlock} from '../components/PizzaBlock';
import {useEffect, useState} from 'react';
import {PizzasType} from '../App.tsx';

export const Home = () => {
    const [pizzas, setPizzas] = useState<PizzasType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedSort, setSelectedSort] = useState(0)
    const [currentCategory, setCurrentCategory] = useState(0)

    const list = [
        {name: 'популярности (ASC)', sort: 'rating', asc: true},
        {name: 'популярности (DESC)', sort: 'rating', asc: false},
        {name: 'цене (ASC)', sort: 'price',asc: true},
        {name: 'цене (DESC)', sort: 'price', asc: false},
        {name: 'алфавиту (ASC)', sort: 'title', asc: true},
        {name: 'алфавиту (DESC)', sort: 'title', asc: false}
    ]

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://64ee53381f87218271428632.mockapi.io/items?${currentCategory > 0 ? `category=${currentCategory}` : ''}&sortBy=${list[selectedSort].sort}&order=${list[selectedSort].asc ? 'asc' : 'desc'}`)
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
        window.scrollTo(0, 0)
    }, [currentCategory, selectedSort]);

    return (<div className="container">
            <div className="content__top">
                <Categories currentCategory={currentCategory} setCurrentCategory={setCurrentCategory}/>
                <Sort selectedSort={selectedSort} setSelectedSort={setSelectedSort} list={list}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {isLoading
                    ?
                    [...new Array(8)].map((_, index) => <Skeleton key={index}/>)
                    : pizzas.map((pizza) => (<PizzaBlock key={pizza.id} {...pizza}/>))
                }
            </div>
        </div>
    )
}