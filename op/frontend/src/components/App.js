import React, { Component} from "react";
import { Switch, Route, Link } from "react-router-dom";
import login_container from "./auth/login_container";
import signup_container from "./auth/signup_container";
import HeaderContainer from './header/header_container'
import OpsContainer from './ops/ops_index_container'
import OpsView from './ops/ops_views_container'
import DraftView from './drafts/draft_view_container'
import DraftForm from './drafts/draft_form_container'
import Splash from './splash/Splash'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// css import
import '../../static/frontend/style/style.scss';
import '../../static/frontend/style/header.scss';
import '../../static/frontend/style/auth.scss';

class App extends Component {

    constructor() {
        super()
    }
    
    render() {
        return (
            <div id='site'>
                
                    <header id="header">
                    <img id="headerLogo" src={"/static/frontend/Op.LogoV1transparent.png"}></img>
                        <Route path={"/"} component={HeaderContainer}/>
                    </header>
                    
                <main>

                    <Switch>
                        <Route exact path={"/"} component={Splash}/>
                        <Route exact path={"/login/"} component={login_container}/>
                        <Route exact path={"/signup/"} component={signup_container}/>
                        <ProtectedRoute exact path={'/ops/'} component={OpsContainer}/>
                        <ProtectedRoute exact path='/ops/:opsid/' component={OpsView} /> 
                        <ProtectedRoute exact path={'/ops/:opsid/drafts/:draftid/'} component={DraftView}/>
                        <ProtectedRoute exact path={'/ops/:opsid/draft/create/'} component={DraftForm}/>
                        <ProtectedRoute exact path={'/ops/:opsid/draft/edit/'} component={DraftForm}/>
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;