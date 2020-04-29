import React, { Component} from "react";
import { Switch, Route, Link } from "react-router-dom";
import login_container from "./auth/login_container";
import signup_container from "./auth/signup_container";
import HeaderContainer from './header/header_container'
import Ops from './ops/ops_index_container'
import Splash from './splash/splash'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

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
                        <Route exact path={"/"} component={Splash}/>
                        <Route exact path={"/login/"} component={login_container}/>
                        <Route exact path={"/signup/"} component={signup_container}/>
                        
                        <ProtectedRoute path={'/ops/'} component={Ops}/>
                        {/* <ProtectedRoute path={'/drafts'} component={Drafts}/> */}
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;