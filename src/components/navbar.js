import React from "react";
import "../styles/navbar.css";

const Navbar = ({setShow}) => {
    return (
        <nav>
            <div className="nav_box">
                <span className="my_shop" onClick={ () => setShow(true)}>My Shoping</span>
                <div className="cart" onClick={ () => setShow(false)}>
                    <span>
                        <i class="fas fa-cart-plus"></i>
                    </span>
                    <span>0</span>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;