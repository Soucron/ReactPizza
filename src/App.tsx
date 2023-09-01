import './scss/app.scss'
import {Header} from './components/Header.tsx';
import {Home} from './pages/Home.tsx';
import {  Route, Routes } from 'react-router-dom';

import {Cart} from './pages/Cart.tsx';
import {NotFoundBlock} from './components/NotFoundBlock';
import {useState} from 'react';



export type PizzasType = {
    id: number;
    imageUrl: string;
    title: string;
    types: number[];
    sizes: number[];
    price: number;
    category: number;
    rating: number;
};

function App() {

    const [searchValue, setSearchValue] = useState('')



    return (
        <div className="wrapper">
            <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
            <div className="content">

                        <Routes>
                            <Route path='/' element={<Home searchValue={searchValue}/>}/>
                            <Route path='/cart' element={<Cart/>}/>
                            <Route path={'*'} element={<NotFoundBlock/>}/>
                        </Routes>
            </div>
        </div>
    )
}

export default App


