import React, {useState} from 'react';
import styled from "styled-components";
import './styles/Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Fade from 'react-reveal/Fade';
import { selectCars } from '../features/car/carSlice';
import {useSelector } from 'react-redux';

const Header = () => {

    const cars = useSelector(selectCars);
    console.log(cars);

    const [burgerStatus, setBurgerStatus] = useState(false);

    return (
        <div className="container">
            <a href="#">
                <img src="/images/logo.svg" alt=""/>
            </a>

            <div className="menu">
                {cars && cars.map((car, index) =>
                    <a href="#" key={index}>{car}</a>
                )}
                {/* <a href="#">Model S</a>
                <a href="#">Model 3</a>
                <a href="#">Model Y</a>
                <a href="#">Model X</a> */}
            </div>

            <div className="right-menu">
                <a href="#">Shop</a>
                <a href="#`{${car}}`" >Tesla Account</a>
                
                {/* <CustomMenu /> */}

                <div className="custom-menu">
                    <MenuIcon onClick={()=>setBurgerStatus(true)} />
                </div>

                { burgerStatus &&

                    <Fade right>
                        <div className="burger-nav">
                            <div className="custom-close">
                                <CloseIcon onClick={()=>setBurgerStatus(false)}/>
                            </div>
                            {cars && cars.map((car, index) =>
                                
                                <li><a href="#" key={index}> {car} </a></li>
                            )}

                            <li><a href="#"> Existing Inventory</a></li>
                            <li><a href="#"> Used Inventory</a></li>
                            <li><a href="#"> Trad-in</a></li>
                            <li><a href="#"> Cybertruck</a></li>
                            <li><a href="#"> Roadaster</a></li>
                            
                        </div>
                    </Fade>
                }
                

            </div>
            
        </div>
    )
}

export default Header

// const CustomMenu = styled(MenuIcon)`

//     cursor: pointer;
//     font-size: 1000px;
//     color: var(--primary);


// `
