import {AppRootStateType, useAppDispatch} from '../redux/store.ts';
import {filterActions} from '../redux/slices/filterSlice.ts';
import {useSelector} from 'react-redux';
import {appActions} from '../redux/slices/appSlice.ts';
import {memo, useCallback, useEffect, useRef} from 'react';


export const  Sort = memo(() => {
    const selectedSort = useSelector((state: AppRootStateType) => state.filter.selectedSort)
    const list = useSelector((state: AppRootStateType) => state.filter.list)
    const isVisible = useSelector((state: AppRootStateType) => state.app.isVisible)
    const dispatch = useAppDispatch()

    const sortRef = useRef<HTMLDivElement>(null)

    const sortOnClickHandler = useCallback((selectedSort: number) => {
        dispatch(filterActions.setSelectedSort({selectedSort}))
        dispatch(appActions.setIsVisible({isVisible: false}))
    }, [isVisible,selectedSort])

    const openSort = useCallback(() => {
        dispatch(appActions.setIsVisible({isVisible:!isVisible}))
    }, [isVisible])

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if ( isVisible && sortRef.current &&  !event.composedPath().includes(sortRef.current)  ) {
                dispatch(appActions.setIsVisible({isVisible: false}))
            }
        }
        document.body.addEventListener('click', handleClickOutside)

        return () => document.body.removeEventListener('click', handleClickOutside)
    }, [isVisible, sortRef]);

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={openSort}>{list[selectedSort].name}</span>
            </div>

            {isVisible && (
                <div className="sort__popup">
                    <ul>
                        {list.map((obj, index) => (
                            <li
                                key={index}
                                onClick={() => sortOnClickHandler(index)}
                                className={selectedSort === index ? 'active' : ''}
                            >
                                {obj.name}
                            </li>
                        ))}

                    </ul>
                </div>)}
        </div>
    )
})