import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>Creado por INACAPLudi © 2024</p>
        </footer>
    );
};

const footerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    left: '0',
    bottom: '0',
    width: '100%'
};

export default Footer;
