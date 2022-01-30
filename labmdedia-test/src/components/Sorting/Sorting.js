import React from 'react';
import './Sorting.css';

function Sorting(props) {

    return (
        <div className="sorting">
            <h2 className="sorting__title">Сортировка:</h2>
            <button onClick={() => {props.sort('registration_date')}} className="sorting__date">Дата регистрации</button>
            <button onClick={() => {props.sort('rating')}} className="sorting__rating">Рейтинг</button>
        </div>
    )
}

export default Sorting;