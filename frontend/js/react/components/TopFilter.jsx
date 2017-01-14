import React from 'react'
import {connect} from 'react-redux'
import {filterChanged} from '../../redux/actions';

class TopFilter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {

        const choices = this.props.filtersData[this.props.sourceName] || [];
        const selection = this.props.headerFilters[this.props.filterName];

        const choicesTpl = [].concat(choices).map((choice, index) => {
            return <label className={selection === choice ? 'selected' : ''} key={index}>
                <input type="radio"
                       name={this.props.filterName}
                       value={choice}
                       onClick={e => this.props.choiceSelected(this.props.filterName, choice)}
                       checked=""/>
                {choice}
            </label>
        });

        return <fieldset>
            <label className={(!selection || (selection === '') )? 'selected' : ''}>
                <input type="radio"
                       name={this.props.filterName}
                       value=""
                       onClick={e => this.props.choiceSelected(this.props.filterName, '')}
                       checked=""/>
                All
            </label>
            {choicesTpl}
        </fieldset>

    }

}


function mapDispatchToProps(dispatch) {
    return {
        choiceSelected(param, value) {
            dispatch(filterChanged(param, value));
        }
    };
}

function mapStateToProps(state) {
    return {
        filtersData: state.filtersData,
        headerFilters: state.headerFilters
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopFilter);