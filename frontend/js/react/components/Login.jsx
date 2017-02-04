import React from 'react'
import {connect} from 'react-redux'
import {hashHistory} from 'react-router'
import {tryLogin} from '../../redux/actions'

class Login extends React.Component {

    static get propTypes() {
        return {
            loggedIn: React.PropTypes.bool
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            login: '',
            pass: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.loggedIn) {
            hashHistory.replace('/app');
        }
    }

    render() {

        if (!this.props.loggedInUser.initialized) {
            return null;
        }

        return (
            <div id="loginState">
                <fieldset>
                    <h4>Auth form</h4>
                    <form name="loginForm" onSubmit={e => {
                        e.preventDefault();
                        this.props.tryLogin(this.state.login, this.state.pass);
                    }}>
                        <div className="input-field">
                            <label>Login
                                <input type="text"
                                       name="login"
                                       required="required"
                                       value={this.state.login}
                                       onChange={e => {
                                           this.setState({
                                               login: e.target.value
                                           })
                                       }}/>
                            </label>
                        </div>
                        <div className="input-field">
                            <label>Pass
                                <input type="password"
                                       name="pass"
                                       required="required"
                                       value={this.state.pass}
                                       onChange={e => {
                                           this.setState({
                                               pass: e.target.value
                                           })
                                       }}/>
                            </label>
                        </div>
                        <div className="input-field">
                            <input type="hidden" name="mode" value="login"/>
                            <button className="button button-outline" type="submit">Login</button>
                        </div>
                    </form>
                </fieldset>
            </div>
        );
    }

}

function mapDispatchToProps(dispatch) {
    return {
        tryLogin(login, pass) {
            dispatch(tryLogin(login, pass));
        }
    };
}

function mapStateToProps(state) {
    return {
        loggedIn: state.loggedInUser.login !== undefined,
        loggedInUser: state.loggedInUser
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);