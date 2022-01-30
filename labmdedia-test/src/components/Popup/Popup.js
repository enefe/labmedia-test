import React from 'react';
import './Popup.css';

function Popup(props) {

    return (
        <div className="popup_active">
            <div className="popup__container">
                <h3 className="popup__title">Вы уверены?</h3>
                <div>
                    <button onClick={props.handleDeleteTrue} className="popup__button">Да</button>
                    <button onClick={props.handleDeleteFalse} className="popup__button">Нет</button>
                </div>
            </div>
        </div>
    )
}

export default Popup;