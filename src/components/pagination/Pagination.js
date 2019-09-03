import React, {Component} from 'react';
import styles from './Pagination.module.css';

class Pagination extends Component {

    state = {
        selectedPage: 1
    };

    pagesAmountArray = () => {
        const { activities } = this.props;
        const pagesAmount = Math.ceil(activities.length / 9);
        const newArr = [];
        for (let i = 1; i <= pagesAmount; i++) {
            newArr.push(i);
        }
        return newArr;
    };

    partOfActivities = (item) => {
        const { activities } = this.props;
        let end = item * 9;
        let start = end - 9;
        this.setState({selectedPage: item});
        this.props.onSelect(activities.slice(start, end));
    };

    renderPages = () => {
        const pagesAmount = this.pagesAmountArray();
         return pagesAmount.map((item) =>
            item === this.state.selectedPage
                ?
                <li key={item} className={styles.selectedState} onClick={() => this.partOfActivities(item)} > {item} </li>
                :
                <li key={item} onClick={() => this.partOfActivities(item)}> {item} </li>
        )
    };

    render() {
        return (
            <div>
                <ul>
                    {
                        this.renderPages()
                    }
                </ul>
            </div>
        );
    }
}

export default Pagination;