import React from 'react';

const Header = () => {
    return(
        <header style={headerStyle}>
            TodoList
        </header>
    );
}

const headerStyle = {
    background: '#333',
    color: 'white',
    padding: '10px',
    textAlign: 'center',
    fontSize: '40px'
}

export default Header;