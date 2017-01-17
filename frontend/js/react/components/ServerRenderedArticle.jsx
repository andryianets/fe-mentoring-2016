import React from 'react'
import ReactDOM from 'react-dom'

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

    render() {
        const article = this.props.data;

        return <article>
            <a className="article-picture" href={article.url} title={article.title} target="_blank">
                <img
                    src={article.urlToImage}
                    height="120" />
            </a>
        </article>
    }

}
