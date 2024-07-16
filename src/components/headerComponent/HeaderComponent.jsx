import React from "react";
import './Header.css';

function HeaderComponent (){

    return (
        <header className="header">
            <div className="header_container">
                <img className="img_logo" src="/img/logoAluaflix.png" alt="logo_aluraflix"/>
                <div className="header_buttons">
                    <button className="header_buttons_home">Home</button>
                    <button className="header_buttons_new">Nuevo Video</button>
                </div>
            </div>
            
        </header>
    );
}

export default HeaderComponent;

