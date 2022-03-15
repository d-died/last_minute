import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    Collapse
} from 'reactstrap'

const Header = () => {

    const [ hamMenu, setHamMenu ] = useState(false)

    const hamToggle = () => { setHamMenu(!hamMenu) }

    return(
        <div className='header'>
            <div>
                <Navbar
                    color='rgb(161, 124, 196)'
                    light
                    expand='md'
                >
                    <NavbarBrand
                    className="me-auto"
                    href="/"
                    >
                    _wilt_
                    </NavbarBrand>
                    <NavbarToggler
                    className={ hamMenu ? 'open' : '' }
                    onClick={ hamToggle }
                    />
                     <div id="close-icon" className={ hamMenu ? "open" : "" }>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <Collapse open={ hamMenu } navbar>
                    <Nav navbar>
                        <NavItem>
                        <NavLink href="/components/">
                            Components
                        </NavLink>
                        </NavItem>
                        <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">
                            GitHub
                        </NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Navbar>
                </div>
        </div>
    )
}


export default Header