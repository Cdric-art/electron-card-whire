import React from "react";
import Logo from '../assets/images/Logo-whire.svg'

export function Loader() {
    return (
        <>
            <div className="logo">
                <img src={Logo} alt="Logo Whire"/>
            </div>
            <div className="lds-roller">
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
                <div/>
            </div>
        </>
    );
}
