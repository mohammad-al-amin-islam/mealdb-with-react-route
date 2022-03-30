import React from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const { mealId } = useParams()
    return (
        <div>
            <h4>This is meal details of id:{mealId}</h4>
        </div>
    );
};

export default MealDetail;