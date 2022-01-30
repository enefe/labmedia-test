import React from 'react';
import './Page.css';

function Page(props) {

    const clickPage = () => {
        return props.paginate(props.numberPage);
    }

    return (
        <li className="pages">
            <a onClick={clickPage} className={props.numberPage == props.page ? "pages__link_active" : "pages__link"} href="#">
                {props.numberPage}
            </a>
        </li>
    );
}

export default Page;