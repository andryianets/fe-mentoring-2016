import React from 'react'
import {connect} from 'react-redux'

import Toolbar from './components/Toolbar';
import TopFilter from './components/TopFilter';
import Sources from './components/Sources';

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return <div id="loggedInState" className={`role-${this.props.loggedInUser.role}`}>
            <Toolbar />
            <div id="topMenu">
                <TopFilter filterName="category" sourceName="categories" />
                <TopFilter filterName="country" sourceName="countries" />
                <TopFilter filterName="language" sourceName="languages" />
            </div>
            <Sources />
        </div>

    }

}

function mapDispatchToProps(dispatch) {
    return {
    };
}

function mapStateToProps(state) {
    return {
        loggedInUser: state.loggedInUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
