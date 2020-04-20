import React, { Component} from "react";
import { Switch, Route, Link } from "react-router-dom";
import login_container from "./auth/login_container";
import signup_container from "./auth/signup_container";
import HeaderContainer from './header/header_container'
import Hello from "./hello";


class App extends Component {

    constructor() {
        super();
        
    }

    

    render() {
        return (
            <div className="site">
                
                    <header>
                        <Route path={"/"} component={HeaderContainer}/>
                    </header>
                
                <main>
                    <h1>op</h1>

                    <Switch>
                        <Route exact path={"/login/"} component={login_container}/>
                        <Route exact path={"/signup/"} component={signup_container}/>
                        <Route exact path={"/hello/"} component={Hello}/>
                        <Route path={"/"} render={() => <div>Home again</div>}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;