import React, {useEffect, useState} from "react";

import Logo from '../../assets/images/whireLetter.png'

export function TopBar() {

    const [url, setUrl] = useState('')

    useEffect(() => {
        setUrl(window.location.pathname.replace('/', ''))
    }, [])

    return <div className="topbar">
        <div>
            <img src={Logo} alt="Logo Whire"/>
        </div>
        <div className="sidebar-action">
            <div className="menu">
                <span/>
                <span/>
                <span/>
            </div>
            <h1>{url}</h1>
        </div>

    </div>
}
