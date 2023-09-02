import {Categories} from '../components/Categories.tsx';
import {Sort} from '../components/Sort.tsx';
import {Skeleton} from '../components/PizzaBlock/Skeleton.tsx';
import {PizzaBlock} from '../components/PizzaBlock';
import {useContext, useEffect, useState} from 'react';
import {PizzasType, SearchContext} from '../App.tsx';
import {Pagination} from '../components/Pagination';



export const Home = () => {
    const [pizzas, setPizzas] = useState<PizzasType[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [selectedSort, setSelectedSort] = useState(0)
    const [currentCategory, setCurrentCategory] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)

    const {searchValue} = useContext(SearchContext)

    const list = [
        {name: 'популярности (ASC)', sort: 'rating', asc: true},
        {name: 'популярности (DESC)', sort: 'rating', asc: false},
        {name: 'цене (ASC)', sort: 'price', asc: true},
        {name: 'цене (DESC)', sort: 'price', asc: false},
        {name: 'алфавиту (ASC)', sort: 'title', asc: true},
        {name: 'алфавиту (DESC)', sort: 'title', asc: false}
    ]
    const category = currentCategory > 0 ? `category=${currentCategory}` : ''
    const order = list[selectedSort].asc ? 'asc' : 'desc'
    const search = searchValue ? `search=${searchValue}` : ''

    useEffect(() => {
        setIsLoading(true)
        fetch(`https://64ee53381f87218271428632.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${list[selectedSort].sort}&order=${order}&${search}`)
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
        window.scrollTo(0, 500)
    }, [currentCategory, selectedSort, searchValue, currentPage]);

    const items = pizzas.filter(obj => {
        return obj
        // if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        //     return true
        // }
        // return  false
    }).map((pizza) => (<PizzaBlock key={pizza.id} {...pizza}/>))

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
                    : items}

            </div>
            <Pagination  setCurrentPage={setCurrentPage}/>
        </div>
    )
}