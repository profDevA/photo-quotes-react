import React from 'react';
import Filter from '../../components/filter';
import Menu from '../../components/menu';
import logoImg from '../../assets/logo.png';

const Header = () => {
    return (
        <>
            <header className="container-fluid">
                <div className="container">
                    <div className="top-header">
                        <div className="top-header__left">
                            <a href="index.html">
                                <img src={logoImg} alt="Logo" />
                            </a>
                        </div>
                        <Menu />
                        <div className="top-header__right">
                            <a href=""><span className="icon-user"></span></a>
                            <div className="menu-icon">
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
                </div>
                <Filter />
            </header>
        </>
    )
}

export default Header;