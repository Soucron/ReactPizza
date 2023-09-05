import {Categories} from '../components/Categories.tsx';
import {Sort} from '../components/Sort.tsx';
import {Skeleton} from '../components/PizzaBlock/Skeleton.tsx';
import {PizzaBlock} from '../components/PizzaBlock';
import {useCallback, useContext, useEffect} from 'react';
import { SearchContext} from '../App.tsx';
import {Pagination} from '../components/Pagination';
import {useSelector} from 'react-redux';
import {AppRootStateType, useAppDispatch} from '../redux/store.ts';
// import {appActions} from '../redux/slices/appSlice.ts';
// import axios from 'axios';
import {filterActions} from '../redux/slices/filterSlice.ts';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { pizzaThunks} from '../redux/slices/pizzaSlice.ts';


export const Home = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {currentCategory, list, selectedSort, currentPage} = useSelector((state: AppRootStateType) => state.filter)
    const isLoading = useSelector((state: AppRootStateType) => state.app.isLoading)
    const categories = useSelector((state: AppRootStateType) => state.filter.categories)
    const pizzas = useSelector( (state: AppRootStateType) => state.pizza.pizzas)

    const {searchValue} = useContext(SearchContext)

    const category = currentCategory > 0 ? `category=${currentCategory}` : ''
    const order = list[selectedSort].asc ? 'asc' : 'desc'
    const search = searchValue ? `search=${searchValue}` : ''
    const sort = 'по' + list[selectedSort].name
    const currCategory = categories[currentCategory]

    useEffect(() => {
        const fetchingUrl = `https://64ee53381f87218271428632.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${list[selectedSort].sort}&order=${order}&${search}`
        const timer = setTimeout(() => {
            dispatch(pizzaThunks.fetchPizza({fetchingUrl}))
            window.scrollTo(0, 100)
        }, 500)
        return () => {
            clearTimeout(timer)
        }
    }, [currentCategory, selectedSort, searchValue, currentPage]);

    useEffect(() => {
        const queryString = qs.stringify({
            sort,
            currCategory,
            order,
            currentPage
        })

        navigate(`?${queryString}`)
    }, [currentCategory, sort, searchValue, currentPage]);

    const setCurrentPage = useCallback((currentPage: number) => {
        dispatch(filterActions.setCurrentPage({currentPage: currentPage}))
    }, [currentPage])

    const items = pizzas.filter(obj => {
        return obj
    }).map((pizza) => (<PizzaBlock key={pizza.id} {...pizza}/>))

    return (<div className="container">
            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {isLoading
                    ?
                    [...new Array(4)].map((_, index) => <Skeleton key={index}/>)
                    : items}

            </div>
            <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}