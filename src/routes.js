import React, { useState } from "react";

import Navbar from "./Components/NavBar";

import {
    BrowserRouter as Router,
    Switch,
    Route }
from "react-router-dom";
import Background from "./Components/background";
import Error from "./Components/Error";
import Placeholder from "./Components/Placeholder";
import Profile from "./Components/Profile";
import Cookies from "js-cookie";
import LoginPage from "./Pages/Login";
 


const Routes = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [Position, setPosition] = useState(0);

    React.useEffect(() => {
        if(Cookies.get("success")) Cookies.set("login", true);
    }, []);
    return(
        <Router>
           {Cookies.get("login") ?
           <>
                <Navbar 
                    IsEnabled={isEnabled}
                    setIsEnabled={setIsEnabled}
                    Position={Position}
                />
                <Switch>
                    <Route path="/" exact>
                        <Profile isEnabled={isEnabled} setPosition={setPosition} />
                    </Route>
                    <Route path="/direct/inbox/">
                        <Placeholder setPosition={setPosition} SetTo={"inbox"} />
                    </Route>
                    <Route path="/explore/">
                        <Placeholder setPosition={setPosition} SetTo={"explore"} />
                    </Route>
                    <Route path="/direct/activity/">
                        <Placeholder setPosition={setPosition} SetTo={"activity"} />
                    </Route>
                    <Route path="/direct/inbox/">
                        <Placeholder setPosition={setPosition} SetTo={"inbox"} />
                    </Route>
                    <Route path="/profile">
                        <Placeholder setPosition={setPosition} SetTo={"profile"} />
                    </Route>
                    <Route path="/saved">
                        <Placeholder setPosition={setPosition} SetTo={"saved"} />
                    </Route>
                    <Route path="/account/settings">
                        <Placeholder setPosition={setPosition} SetTo={"settings"} />
                    </Route>
                    <Route path="/swap">
                        <Placeholder setPosition={setPosition} SetTo={"swap"} />
                    </Route>
                    <Route path="/">
                        <Error setPosition={setPosition} />
                    </Route>
                </Switch>
            </>
            :
            <Switch>
                <Route path="/">
                    <LoginPage/>
                </Route>
            </Switch>
            }
            {/* <Background IsEnabled={isEnabled}/> */}
            {/* <footer onLoad={() => {alert("load"); setisLoggedIn(Cookies.get("login"))}}> </footer> */}
        </Router>
    );
}

export default Routes;