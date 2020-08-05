import React, { Component} from "react";
import { connect } from 'react-redux';
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
import {fetchUserById, logoutUser} from '../actions/auth'

// css import
import '../../static/frontend/style/style.scss';
import '../../static/frontend/style/header.scss';
import '../../static/frontend/style/auth.scss';
import jwt_decode from "jwt-decode"

class App extends Component {

    constructor() {
        super()
        
    }

    componentDidMount() {
        // let refresh = window.localStorage.getItem('refresh_token')
        // if (refresh !== undefined) {
        //     let decoded = jwt_decode(refresh)
        //     debugger

        //     this.props.fetchUserById(decoded.user_id)
        // }
    }
    
    render() {
        return (
            <div id='site'>
                
                    <header id="header">
                        <Link to='/'>
                    <img id="headerLogo" src={"/static/frontend/Op.LogoV1transparent.png"}></img>
                        </Link>
                        <Route path={"/"} component={HeaderContainer}/>
                    </header>
                    
                <main>

                    <Switch>
                        <Route exact path={"/"} component={Splash}/>
                        <Route exact path={"/login/"} component={login_container}/>
                        <Route exact path={"/signup/"} component={signup_container}/>
                        <Route exact path={'/ops/'} component={OpsContainer}/>
                        <Route exact path={'/ops/:opsid/'} component={OpsView} /> 
                        <Route exact path={'/ops/:opsid/drafts/:draftid/'} component={DraftView}/>
                        <Route exact path={'/ops/:opsid/draft/create/'} component={DraftForm}/>
                        <Route exact path={'/ops/:opsid/draft/edit/'} component={DraftForm}/>
                    </Switch>
                </main>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        fetchUserById:(id) => dispatch(fetchUserById(id)),
    }
}
export default connect(
    null,
    mapDispatchToProps
)(App);


