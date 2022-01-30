import React from 'react';
import './User.css';
import '../Popup/Popup.css';

function User(props) {

    // Удаление пользователя:
     const clickDelete = () => {
        props.handleDelete(props.user.id);
    } 

    return (
            <tr>
                <td className="table__user">{props.user.username}</td>
                <td className="table__user">{props.user.email}</td>
                <td className="table__user">{props.user.registration_date}</td>
                <td className="table__user">{props.user.rating}</td>
                <td onClick={clickDelete} className="table__user table__user_delete">X</td>
            </tr>

    );
}

export default User;