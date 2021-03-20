import React, {useState,useEffect} from "react";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import * as Cookies from "js-cookie";
import Footer from "./components/Footer";
import {useTranslation} from "react-i18next";
import i18next from "i18next";


import {connect, useDispatch, useStore} from 'react-redux'
import UserPage from "./pages/UserPage";
import Header from "./components/Header";




interface AppProps
{
    state:any,
    dispatch:any
}
const App = (props:AppProps) => {

    return( <>
            { props.state.init &&
                <BrowserRouter>
                    {
                        props.state.authorized &&
                            <Header/>
                    }
                    <Switch>
                        <Route path="/" exact>
                            {props.state.authorized ?
                                <Redirect to={'/dashboard'}/> :
                                <Auth  />
                            }
                        </Route>
                        <Route path="/dashboard" exact>
                            {props.state.authorized ?
                                <Dashboard/> :
                                <Redirect to={'/'}/>
                            }
                        </Route>
                        <Route path="/user" exact>
                            {props.state.authorized ?
                                <UserPage/> :
                                <Redirect to={'/'}/>
                            }
                        </Route>
                    </Switch>
                    {
                        ! props.state.authorized &&
                        <Footer/>
                    }
                </BrowserRouter>
            }
        </>
    );
}

const mapStateToProps = (state: any) => ({
    state: state
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatch
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
