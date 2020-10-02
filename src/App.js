import React from 'react';
import './App.css';
import NavBar from './components/nav/nav';
import {Route} from 'react-router-dom';
import News from './components/news/news';
import Music from './components/music/music';
import Settings from './components/settings/settings';
import DialogsContainer from './components/dialogs/dialogs-container';
import UsersContainer from "./components/users/users-container";
import ProfileContainer from "./components/profile/profile-container";
import HeaderContainer from "./components/header/header-container";
import Login from "./components/login/login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/preloader/preloader";



class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
    if(!this.props.initialized){
        return <Preloader/>
    }
        return (
            <div>
                <div className='background'>

                </div>
                <div className='app-wrapper'>

                    <HeaderContainer/>
                    <NavBar/>

                    <div className="app-wrapper-content">
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route path='/news' render={() => <News/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </div>


                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) =>({
  initialized: state.app.initialized
})

export default  connect(mapStateToProps, {initializeApp})(App);
