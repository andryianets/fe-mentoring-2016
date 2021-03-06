import React from 'react'
import {connect} from 'react-redux'
import {loadArticles, removeArticle} from '../../redux/actions';

import Article from './Article';

class Sources extends React.Component {

    static get propTypes() {
        return {
            sourcesList: React.PropTypes.array,
            articlesList: React.PropTypes.object
        };
    }

    constructor(props) {
        super(props);
    }

    render() {

        const sourcesTpls = this.props.sourcesList.map((source, index) => {

            const articlesTpls = this.props.articlesList.sourceId === source.id ?
                this.props.articlesList.articles
                    .map((article, articleIndex) =>
                        <Article
                            data={article}
                            onDeleteClick={(e, article) => {
                                this.props.removeArticle(article._id, source.id);
                            }}
                            key={articleIndex}/>)
                :
                [];

            return <div className="source" key={index}>
                <div className="logo">
                    <a href="javascript:void(0)" title={source.name} onClick={e => this.props.loadArticles(source.id)}>
                        <img src={source.urlsToLogos.medium} height="60"/>
                    </a>
                </div>
                <div className="articles">
                    {articlesTpls}
                </div>
            </div>;
        });

        return <div id="content">
            {sourcesTpls}
        </div>
    }

}

function mapDispatchToProps(dispatch) {
    return {
        loadArticles(sourceId) {
            dispatch(loadArticles(sourceId));
        },
        removeArticle(id, sourceId) {
            dispatch(removeArticle(id, sourceId));
        }
    };
}

function mapStateToProps(state) {
    return {
        sourcesList: state.sourcesList,
        articlesList: state.articlesList,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sources);

