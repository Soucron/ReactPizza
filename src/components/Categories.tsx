import {useState} from 'react';

export function Categories() {
    const [currentCategory, setCurrentCategory] = useState(0)
     const onClickHandler = (value:number) => {
         setCurrentCategory(value)
     }

    return(
        <div className="categories">
            <ul>
                <li onClick={()=>onClickHandler(0)}  className={currentCategory === 0 ? 'active' : ''}>Все</li>
                <li onClick={()=>onClickHandler(1)} className={currentCategory === 1 ? 'active' : ''}>Мясные</li>
                <li onClick={()=>onClickHandler(2)} className={currentCategory === 2 ? 'active' : ''}>Вегетарианская</li>
                <li onClick={()=>onClickHandler(3)} className={currentCategory === 3 ? 'active' : ''}>Гриль</li>
                <li onClick={()=>onClickHandler(4)} className={currentCategory === 4 ? 'active' : ''}>Острые</li>
                <li onClick={()=>onClickHandler(5)} className={currentCategory === 5 ? 'active' : ''}>Закрытые</li>
            </ul>
        </div>
    )
}