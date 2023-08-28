import './scss/app.scss'
import {Header} from './components/Header.tsx';
import {Categories} from './components/Categories.tsx';
import {Sort} from './components/Sort.tsx';
import {PizzaBlock} from './components/PizzaBlock.tsx';


function App() {


    return (
        <div className="wrapper">
            <Header/>
            <div className="content">
                <div className="container">
                    <div className="content__top">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h2 className="content__title">Все пиццы</h2>
                    <div className="content__items">
                        <PizzaBlock title={'Цыпленок пепперони'} price={22.90}/>
                        <PizzaBlock title={'Ветчина и соус гриль'} price={20.90}/>
                        <PizzaBlock title={'Карбонара'} price={22.90}/>
                        <PizzaBlock title={'Ранч пицца'} price={20.90}/>
                        <PizzaBlock title={'Баварская'} price={20.90}/>
                        <PizzaBlock title={'Грибная'} price={20.90}/>
                        <PizzaBlock title={'Пепперони'} price={22.90}/>
                        <PizzaBlock title={'Четыре сыра'} price={24.90}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
