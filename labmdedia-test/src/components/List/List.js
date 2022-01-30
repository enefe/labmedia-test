import React from 'react';
import './List.css';

import Search from '../Search/Search';
import Sorting from '../Sorting/Sorting';
import UserTable from '../UserTable/UserTable';
import Pagination from '../Pagination/Pagination';
/* import Popup from '../Popup/Popup'; */

function List(props) {

  return (
    <div className="list">
        <h2 className="list__title">Список пользователей</h2>
        <Search setValue={props.setValue} setDirectionSort={props.setDirectionSort} setSearchActive={props.setSearchActive} />
        <Sorting sort={props.sort} />
        <UserTable users={props.users} active={props.active} setActive={props.setActive} onUserDelete={props.onUserDelete} />
        <Pagination page={props.page} usersOnPage={props.usersOnPage} totalUsers={props.totalUsers} paginate={props.paginate} />
        {/* <Popup users={props.users} active={props.active} setActive={props.setActive} onUserDelete={props.onUserDelete} /> */}
    </div>
  );
}

export default List;