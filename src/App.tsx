import './scss/app.scss'
import {Header} from './components/Header.tsx';
import {Home} from './pages/Home.tsx';
import {Route, Routes} from 'react-router-dom';
import {Cart} from './pages/Cart.tsx';
import {NotFoundBlock} from './components/NotFoundBlock';






function App() {




    return (
        <div className="wrapper">
                <Header />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/cart" element={<Cart/>}/>
                        <Route path={'*'} element={<NotFoundBlock/>}/>
                    </Routes>
                </div>

        </div>
    )
}

export default App


