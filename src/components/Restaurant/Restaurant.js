import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Restaurant = () => {
    const [input, setInput] = useState('');
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [input])
    const getInput = e => {
        setInput(e.target.value);
    }

    return (
        <div>
            <h3 className='text-6xl'>Welcome to my restaurant</h3>
            <input onChange={getInput} type="text" placeholder='Search for any meals' className='mt-10 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"' name="" id="" />
            <h3>Total result found:{meals.length}</h3>
            <div className='grid md:grid-cols-3 gap-6 p-10'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurant;