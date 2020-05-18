import React, { Component} from "react";
import { Switch, Route, Link } from "react-router-dom";
import login_container from "./auth/login_container";
import signup_container from "./auth/signup_container";
import HeaderContainer from './header/header_container'
import OpsContainer from './ops/ops_index_container'
import OpsView from './ops/ops_views_container'
import DraftView from './drafts/draft_view_container'
import Splash from './splash/splash'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

class App extends Component {

    constructor() {
        super()
    }
    
    render() {
        return (
            <div className="site">
                
                    <header id='header'>
                    <img id="headerLogo" src={"/static/frontend/Op.LogoV2copy.jpg"}></img>
                        <Route path={"/"} component={HeaderContainer}/>
                    </header>
                    
                <main>

                    <Switch>
                        <Route exact path={"/"} component={Splash}/>
                        <Route exact path={"/login/"} component={login_container}/>
                        <Route exact path={"/signup/"} component={signup_container}/>
                        <ProtectedRoute exact path={'/ops/'} component={OpsContainer}/>
                        <ProtectedRoute exact path='/ops/:opsid' component={OpsView} /> 
                        <ProtectedRoute exact path={'/ops/:opsid/drafts/:draftid'} component={DraftView}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;