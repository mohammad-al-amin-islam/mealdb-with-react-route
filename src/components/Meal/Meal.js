import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Meal = ({ meal }) => {
    const { strMeal, strMealThumb, strInstructions, idMeal } = meal;
    const navigate = useNavigate();
    const movePath = () => {
        const path = `/restaurant/${idMeal}`;
        navigate(path);
    }

    console.log(meal);
    return (
        <div className='rounded bg-slate-100 border'>
            <img className='text-center w-56 mx-auto my-3' src={strMealThumb} alt="" />
            <h3 className='text-xl text-center'>name:{strMeal}</h3>
            <h3 className='text-center'>{strInstructions.slice(0, 100)}</h3>
            <Link to={'/restaurant/' + idMeal}>Get Details</Link>
            <button onClick={movePath} className='rounded-none bg-gray-500 p-3 m-3 text-cyan-100'>Add this food</button>
        </div>
    );
};

export default Meal;