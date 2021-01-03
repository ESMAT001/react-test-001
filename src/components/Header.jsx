import React from 'react';

const Header = (props) => {
    return (
        <h2 className="text-center  font-weight-light">
            {props.headerText}
        </h2>
    )
}

export default Header;