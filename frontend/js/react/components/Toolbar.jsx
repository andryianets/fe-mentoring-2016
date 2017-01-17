import React from 'react'
import {connect} from 'react-redux'
import {addArticle} from '../../redux/actions'

class Toolbar extends React.Component {

    static get propTypes() {
        return {
            loggedInUser: React.PropTypes.object
        };
    }

    constructor(props) {
        super(props);
    }

    render() {
        return <header>
            <span id="loggedInInfo">Welcome, {this.props.loggedInUser.login}</span>
            <span>&nbsp; | &nbsp;</span>
            <ul className="admin-menu">
                <li>
                    <a href="javascript:void(0)" onClick={e => {this.props.addArticle()}}>Add article</a>
                </li>
            </ul>
            <a id="logout" href="/api/auth/logout">Logout</a>
        </header>
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addArticle() {
            dispatch(addArticle({
                title: 'Test at ' + new Date(),
                url: 'http://tut.by',
                urlToImage: 'https://img.tyt.by/p/0d/f/logo_tutby_startapy_21.01.png',
                publishedAt: (new Date()).toISOString(),
                source: {
                    id: 'usa-today',
                    category: 'general',
                    language: 'en',
                    country: 'us'
                }
            }));
        }
    };
}

function mapStateToProps(state) {
    return {
        loggedInUser: state.loggedInUser || {}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);


