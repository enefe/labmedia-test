import React from 'react';
import './UserTable.css';

import User from '../User/User';

function UserTable(props) {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="table__head">Имя пользователя</th>
                    <th className="table__head">E-mail</th>
                    <th className="table__head">Дата регистрации</th>
                    <th className="table__head">Рейтинг</th>
                    <th className="table__head"></th>
                </tr>
            </thead>
            <tbody>
                {props.users.map((item) => {
                    return (
                        <User user={item} key={item.id} active={props.active} setActive={props.setActive} onUserDelete={props.onUserDelete} />
                    )
                })}
            </tbody>
        </table>
    );
}

export default UserTable;