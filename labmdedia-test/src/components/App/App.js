'use strict';
import React from 'react';
import './App.css';

import List from '../List/List';

import {apiUsers} from '../../utils/Api';

function App() {

  // Список всех пользователей:

  const [users, setUsers] = React.useState([]); // - все наши пользователи

  React.useEffect(() => {  // - показываем пользователей на странице
    apiUsers.getUsers()
      .then((res) => {
        console.log(res);
        setUsers(res);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])

  // Поиск пользователей по имени или email:

  const [value, setValue] = React.useState(''); // - значение, которое пишется в поисковой строке

  const searchUsers = users.filter((user) => {
    return user.username.toLowerCase().includes(value.toLowerCase()) || user.email.toLowerCase().includes(value.toLowerCase());
  })

  // Пагинация:

  const [page, setPage] = React.useState(1); // - страница, на которой мы находимся
  const [usersOnPage] = React.useState(5); // - количество пользователей на одной странице
  
  const lastPageIndex = page * usersOnPage; // - высчитываем последний индекс текущей страницы
  const firstPageIndex = lastPageIndex - usersOnPage; // - высчитываем первый индекс текущей страницы
  const currentPage = searchUsers.slice(firstPageIndex, lastPageIndex); // - текующая страница, на которой мы находимся

  const totalUsers = users.length; // - количество всех пользователей

 function paginate(numberPage) {
    return setPage(numberPage);
  }

  // Удаление пользователя:

  function handleUserDelete(user) {
    const userId = user.id;
    setUsers(users.filter((item) => {
      return item.id !== userId;
    }));
  }

  // Сортировка:

  const [directionSort, setDirectionSort] = React.useState(true); // - направление сортировки

  const sort = (itemSort) => {
    const copyUsers = searchUsers.concat(); // - копируем массив 

    let sortUsers;

    if (directionSort) {
      sortUsers = copyUsers.sort((a, b) => {return a[itemSort] > b[itemSort] ? -1 : 1});
    } else {
      sortUsers = copyUsers.reverse((a, b) => {return a[itemSort] > b[itemSort] ? -1 : 1});
    } 

    setUsers(sortUsers);
    setDirectionSort(!directionSort);
  }

  // Попап:

  const [active, setActive] = React.useState(false); // - активность модального окна

  const [searchActive, setSearchActive] = React.useState(false);

  return (
    <div className="page">
      <List 
        users={currentPage} 
        onUserDelete={handleUserDelete} 
        setValue={setValue} 
        usersOnPage={usersOnPage} 
        totalUsers={totalUsers} 
        paginate={paginate} 
        page={page}
        sort={sort}
        setDirectionSort={setDirectionSort}
        active={active}
        setActive={setActive}
        setSearchActive={setSearchActive}
      />
    </div>
  );
}

export default App;