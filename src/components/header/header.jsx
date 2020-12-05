import React from 'react';
import {
    Nav,
    Navbar,
    NavbarBrand,
    Collapse,
    CardTitle,
} from 'reactstrap';

import profilephoto from '../../assets/images/users/1.jpg';
import notify from '../../assets/images/users/2.png';

/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
import logoKlasha from '../../assets/images/klasha.png';
import logoLight from '../../assets/images/klasha.png';

const Header = () => {

    /*--------------------------------------------------------------------------------*/
    /*To open SIDEBAR-MENU in MOBILE VIEW                                             */
    /*--------------------------------------------------------------------------------*/
    const showMobilemenu = () => {
        document.getElementById('main-wrapper').classList.toggle('show-sidebar');
    }

    return (
        <header className="topbar remove-shadow navbarbg" data-navbarbg="skin6">
            <Navbar className="top-navbar" dark expand="md">
                <div className="navbar-header header-mobile" id="logobg" data-logobg="skin6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
                    {/*--------------------------------------------------------------------------------*/}
                    <NavbarBrand href="/">
                        {/* <b className="logo-icon">
                            <img src={logodarkicon} alt="homepage" className="dark-logo" />
                            <img
                                src={logolighticon}
                                alt="homepage"
                                className="light-logo"
                            />
                        </b> */}
                        <span className="logo-text">
                            <img src={logoKlasha} alt="homepage" className="dark-logo logo-style" />
                            <img
                                src={logoLight}
                                className="light-logo"
                                alt="homepage"
                            />
                        </span>
                    </NavbarBrand>
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Mobile View Toggler  [visible only after 768px screen]                         */}
                    {/*--------------------------------------------------------------------------------*/}
                    <button className="btn-link nav-toggler d-block d-md-none" onClick={() => showMobilemenu()}>
                        <i className="ti-menu ti-close" />
                    </button>
                </div>
                <Collapse className="navbarbg" navbar data-navbarbg="skin6" >
                    <div className="ml-4">
                        <CardTitle className="mb-0">Balances</CardTitle>
                        <p className="mb-0">Today, 19th October 2020</p>
                    </div>
                    <Nav className="ml-auto float-right" navbar>
                        
                        <div className="d-flex mr-4">
                            <img
                                src={notify}
                                alt="notify"
                                className="rounded-circle"
                                width="31"
                            />
                            <img
                                src={profilephoto}
                                alt="user"
                                className="rounded-circle ml-3"
                                width="31"
                            />
                        </div>
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
}
export default Header;
