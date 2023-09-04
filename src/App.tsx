import './scss/app.scss'
import {Header} from './components/Header.tsx';
import {Home} from './pages/Home.tsx';
import {Route, Routes} from 'react-router-dom';

import {Cart} from './pages/Cart.tsx';
import {NotFoundBlock} from './components/NotFoundBlock';
import {createContext, useState} from 'react';
import {SearchPropsType} from './components/Search';


export type PizzasType = {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
    count: number
};

export const SearchContext = createContext<SearchPropsType>({searchValue: '', setSearchValue: () => {}})

function App() {

    const [searchValue, setSearchValue] = useState('')


    return (
        <div className="wrapper">
            <SearchContext.Provider value={{searchValue, setSearchValue }}>
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path={'*'} element={<NotFoundBlock/>}/>
                    </Routes>
                </div>
            </SearchContext.Provider>
        </div>
    )
}

export default App


