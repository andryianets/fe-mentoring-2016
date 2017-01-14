import React from 'react'

export default class Article extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const article = this.props.data;

        return <article>
            <a className="article-picture" href={article.url} title={article.title} target="_blank">
                <img src={article.urlToImage} height="120" />
            </a>
        </article>
    }

}
