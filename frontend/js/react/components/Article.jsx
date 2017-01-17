import React from 'react'
import ReactDOM from 'react-dom'
import ImagePreloader from '../../ImagePreloader';

export default class Article extends React.Component {

    static get propTypes() {
        return {
            data: React.PropTypes.object
        };
    }

    constructor(props) {
        super(props);
    }

    get elementNode() {
        return ReactDOM.findDOMNode(this);
    }

    componentDidMount() {
        ImagePreloader(this.elementNode.querySelectorAll(`a img`));
    }

    render() {
        const article = this.props.data;

        return <article>
            <a className="article-picture" href={article.url} title={article.title} target="_blank">
                <img
                    data-src={article.urlToImage}
                    src={require('file-loader?name=assets/[hash].[ext]!../../../assets/loader.gif')}
                    height="120" />
            </a>
        </article>
    }

}
