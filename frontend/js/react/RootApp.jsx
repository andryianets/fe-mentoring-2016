import React from 'react'
import {connect} from 'react-redux'
import {initApp} from '../redux/actions'

class RootApp extends React.Component {

    componentDidMount() {
        this.props.initApp();
    }

    render() {
        return (
            <div>
                {this.props.errorMessage ?
                    <div id="errors">
                        <span className="error">{this.props.errorMessage}</span>
                    </div>
                    :
                    null}
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        initApp() {
            dispatch(initApp());
        }
    };
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedInUser && state.loggedInUser.login,
        errorMessage: state.errorMessage
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RootApp);