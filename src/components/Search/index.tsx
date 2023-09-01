import styles from './Search.module.scss'
import search from '../../assets/img/search.svg'
import clean from '../../assets/img/clear-svgrepo-com.svg'

type SearchPropsType = {
    searchValue: string,
    setSearchValue: (value: string) => void
}
export const Search = ({searchValue,setSearchValue}: SearchPropsType) => {
    return(
        <div className={styles.root}>
            <img className={styles.icon} src={search}/>
            <input
                onChange={(event)=> setSearchValue( event.target.value )}
                value={searchValue}
                className={styles.input} placeholder='Поиск пиццы'/>
            {searchValue && <img onClick={()=> setSearchValue('')} className={styles.clear} src={clean}/>}
        </div>
    )
}