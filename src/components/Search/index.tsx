import styles from './Search.module.scss'
import search from '../../assets/img/search.svg'
import clean from '../../assets/img/clear-svgrepo-com.svg'
import {useContext, useRef} from 'react';
import {SearchContext} from '../../App.tsx';

 export type SearchPropsType = {
    searchValue: string,
    setSearchValue: (value: string) => void
}
export const Search = () => {
    const {searchValue, setSearchValue} = useContext(SearchContext)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const clearHandler = () => {
        setSearchValue('')
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }

    return(
        <div className={styles.root}>
            <img className={styles.icon} src={search} alt={'search'}/>
            <input
                ref={inputRef}
                onChange={(event)=> setSearchValue( event.target.value )}
                value={searchValue}
                className={styles.input} placeholder='Поиск пиццы'/>
            {searchValue &&  <img onClick={clearHandler} className={styles.clear} src={clean} alt={'clean'}/>}
        </div>
    )
}