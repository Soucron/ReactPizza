import {AppRootStateType, useAppDispatch} from '../redux/store.ts';
import {filterActions} from '../redux/slices/filterSlice.ts';
import {useSelector} from 'react-redux';



export function Categories() {

    const currentCategory = useSelector((state: AppRootStateType) => state.filter.currentCategory)
    const dispatch = useAppDispatch()

    const setCategoryHandler = (currentCategory: number) => {
        dispatch(filterActions.setCurrentCategory({currentCategory}))
    }

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые','Закрытые']

    return (
        <div className="categories">
            <ul>
                {categories.map((category, index)=>(
                    <li key={index} onClick={()=> setCategoryHandler(index)} className={currentCategory === index ? 'active' : ''}>{category}</li>
                ))}
            </ul>
        </div>
    )
}