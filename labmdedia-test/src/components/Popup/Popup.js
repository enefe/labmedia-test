import React from 'react';
import './Popup.css';

function Popup(props) {

    const onYes = () => {

        props.setActive(false);
    }

    const onNo = () => {
        props.setActive(false);
    }


    return (
        <div className={!props.active ? "popup" : "popup_active"}>
            <div className="popup__container">
                <h3 className="popup__title">Вы уверены?</h3>
                <div>
                    <button onClick={onYes} className="popup__button">Да</button>
                    <button onClick={onNo} className="popup__button">Нет</button>
                </div>
            </div>
        </div>
    )
}

export default Popup;