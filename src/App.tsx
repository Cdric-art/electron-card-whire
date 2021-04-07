import React, {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Dashboard} from "./components/Dashboard";
import {Loader} from "./components/Loader";
import {wait} from "./components/libs/wait";

function App() {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        wait(3000)
            .then(() => setIsLoading(!isLoading))
    }, [])

    return <div className="App">
        {isLoading ? (
        <Router>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
            </Switch>
        </Router>
        ) : <Loader/>}
    </div>
}

export default App
