import React, { useState } from "react";

import Lightbox from './Components/Lightbox';
import Navbar from "./Components/NavBar";

import {
    BrowserRouter as Router,
    Switch,
    Route }
from "react-router-dom";
import Background from "./Components/background";
 


const Routes = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    return(
        <Router>
            <Navbar 
                IsEnabled={isEnabled}
                setIsEnabled={setIsEnabled}
            />
            <Switch>
                <Route path="/" exact>
                    <Lightbox Theme={isEnabled}/>
                </Route>
            </Switch>
            <Background IsEnabled={isEnabled}/>
        </Router>
    );
}

export default Routes;