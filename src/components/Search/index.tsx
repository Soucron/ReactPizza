import styles from './Search.module.scss'
import search from '../../assets/img/search.svg'
import clean from '../../assets/img/clear-svgrepo-com.svg'
import {ChangeEvent, useRef} from 'react';

import {AppRootStateType, useAppDispatch} from '../../redux/store.ts';
import {appActions} from '../../redux/slices/appSlice.ts';
import {useSelector} from 'react-redux';


export const    Search = () => {
    const dispatch = useAppDispatch()
    const searchValue = useSelector((state: AppRootStateType) => state.app.searchValue)
    const inputRef = useRef<HTMLInputElement | null>(null)

    const clearHandler = () => {
         dispatch(appActions.setSearchValue({searchValue:''}))

        if (inputRef.current) {
            inputRef.current.focus()
        }
    }
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
         dispatch(appActions.setSearchValue({searchValue:event.target.value}))
    }

    return(
        <div className={styles.root}>
            <img className={styles.icon} src={search} alt={'search'}/>
            <input
                ref={inputRef}
                onChange={onChangeHandler}
                value={searchValue}
                className={styles.input} placeholder='Поиск пиццы'/>
            {searchValue &&  <img onClick={clearHandler} className={styles.clear} src={clean} alt={'clean'}/>}
        </div>
    )
}