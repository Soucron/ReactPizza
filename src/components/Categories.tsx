

type CategoriesPropsType = {
    currentCategory: number
    setCurrentCategory: (value: number) => void
}
export function Categories({currentCategory, setCurrentCategory} : CategoriesPropsType) {




    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые','Закрытые']

    return (
        <div className="categories">
            <ul>
                {categories.map((category, index)=>(
                    <li key={index} onClick={() => setCurrentCategory(index)} className={currentCategory === index ? 'active' : ''}>{category}</li>
                ))}
            </ul>
        </div>
    )
}