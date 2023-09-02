import {Categories} from '../components/Categories.tsx';
import {Sort} from '../components/Sort.tsx';
import {Skeleton} from '../components/PizzaBlock/Skeleton.tsx';
import {PizzaBlock} from '../components/PizzaBlock';
import {useContext, useEffect, useState} from 'react';
import {PizzasType, SearchContext} from '../App.tsx';
import {Pagination} from '../components/Pagination';
import {useSelector} from 'react-redux';
import {AppRootStateType, useAppDispatch} from '../redux/store.ts';
import {appActions} from '../redux/slices/appSlice.ts';



export const Home = () => {
    const dispatch = useAppDispatch()
    const {currentCategory,list,selectedSort} = useSelector((state: AppRootStateType) => state.filter)
    const isLoading = useSelector((state: AppRootStateType) => state.app.isLoading)

    const [pizzas, setPizzas] = useState<PizzasType[]>([])
    const [currentPage, setCurrentPage] = useState(1)

    const {searchValue} = useContext(SearchContext)

    const category = currentCategory > 0 ? `category=${currentCategory}` : ''
    const order = list[selectedSort].asc ? 'asc' : 'desc'
    const search = searchValue ? `search=${searchValue}` : ''

    useEffect(() => {
        dispatch(appActions.setIsLoading({isLoading: true}))
        fetch(`https://64ee53381f87218271428632.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${list[selectedSort].sort}&order=${order}&${search}`)
            .then(res => {
                return res.json()
            })
            .then(data => {
                setPizzas(data)
            })
            .finally(() => {
                dispatch(appActions.setIsLoading({isLoading: false}))
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
                <Categories />
                <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">

                {isLoading
                    ?
                    [...new Array(4)].map((_, index) => <Skeleton key={index}/>)
                    : items}

            </div>
            <Pagination  setCurrentPage={setCurrentPage}/>
        </div>
    )
}