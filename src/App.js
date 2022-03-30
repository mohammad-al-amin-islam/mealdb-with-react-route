import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Restaurant from './components/Restaurant/Restaurant';
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';
import MealDetail from './components/MealDetails/MealDetail';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/restaurant' element={<Restaurant></Restaurant>}></Route>
        <Route path='/restaurant/:mealId' element={<MealDetail></MealDetail>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
