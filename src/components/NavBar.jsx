import React from 'react'
import CartWidget from './HijoNavBar/CartWidget'
import logoPage from '.././assets/img/upc.png'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <div className='navBar'>
                <Link to={"/"}>
                    <div className='imgTitle'>
                            <img 
                                src={ logoPage } 
                                alt="Logotipo Pagina" 
                                className='imgLogo'
                                />
                            <h2>Shop SL</h2>
                    </div>
                </Link>
                <Menu>
                    <MenuButton className='button-categories'>
                        Categories
                    </MenuButton>
                    <MenuList>
                        <Link to={"/category/Todos"}>
                            <MenuItem>Todos</MenuItem>
                        </Link>
                        <Link to={"/category/Perifericos"}>
                            <MenuItem>Perifericos</MenuItem>
                        </Link>
                        <Link to={"/category/PCArmada"}>
                            <MenuItem>PC Armadas</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
                <Link to={"/cart"}>
                    <CartWidget />
                </Link>
            </div>
        </>
    )
}

export default NavBar