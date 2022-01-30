import React from 'react';
import './Pagination.css';

import Page from '../Page/Page';

function Pagination(props) {

    const pages = []; // - количество страниц

    for (let i = 1; i <= Math.ceil(props.totalUsers / props.usersOnPage); i++) {
        pages.push(i); // - получаем количество наших страниц в зависимости от количества наших пользователей
    }

    return (
        <div>
            <ul className="pagination">
                {pages.map((numberPage, index) => {
                    return (
                        <Page page={props.page}  key={index} numberPage={numberPage} paginate={props.paginate} />
                    )
                })}
            </ul>
        </div>
    );
}

export default Pagination;