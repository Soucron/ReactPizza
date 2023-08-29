import {useState} from 'react';

export function Categories() {
    const [currentCategory, setCurrentCategory] = useState(0)
    const onClickHandler = (value: number) => {
        setCurrentCategory(value)
    }

    const categories = ['Все', 'Мясные', 'Вегентарианская', 'Гриль', 'Острые','Закрытые']

    return (
        <div className="categories">
            <ul>
                {categories.map((category, index)=>(
                    <li key={index} onClick={() => onClickHandler(index)} className={currentCategory === index ? 'active' : ''}>{category}</li>
                ))}
            </ul>
        </div>
    )
}