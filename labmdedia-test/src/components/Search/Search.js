import React from 'react';
import './Search.css';

import search from '../../images/search.svg';

function Search(props) {

    const onSearch = (e) => {
        props.setValue(e.target.value);
    }

    const onClear = () => {
        props.setValue('');
    }

    return (
        <form className="search">
            <img className="search__image" src={search} alt="Поиск" />
            <input onChange={onSearch} placeholder="Поиск по имени или email" className="search__input" id="user" name="user" type="text" defaultValue='' />
            <button onClick={onClear} type="reset" className="search__button">Очистить фильтр</button>
        </form>
    )
}

export default Search;