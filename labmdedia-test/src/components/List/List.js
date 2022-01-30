import React from 'react';
import './List.css';

import Search from '../Search/Search';
import Sorting from '../Sorting/Sorting';
import UserTable from '../UserTable/UserTable';
import Pagination from '../Pagination/Pagination';

function List(props) {

  return (
    <div className="list">
        <h2 className="list__title">Список пользователей</h2>
        <Search setValue={props.setValue} setDirectionSort={props.setDirectionSort} />
        <Sorting sort={props.sort} />
        <UserTable users={props.users} handleDelete={props.handleDelete} />
        <Pagination page={props.page} usersOnPage={props.usersOnPage} totalUsers={props.totalUsers} paginate={props.paginate} />
    </div>
  );
}

export default List;