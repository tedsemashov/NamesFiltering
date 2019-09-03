import React, {Component} from 'react';
import styles from './Pagination.module.css';

class Pagination extends Component {

    state = {
        selectedPage: 1,
        allPagesList: [],
        currentPagesList: []
    };

    componentDidMount() {
        const pagesAmount = this.pagesAmountArray();
        this.setState({allPagesList: pagesAmount});
        if(pagesAmount.length > 4) {
            this.setState({currentPagesList: pagesAmount.slice(0,4)})
        }
    }

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
        const end = item * 9;
        const start = end - 9;
        this.setState({selectedPage: item});
        this.props.onSelect(activities.slice(start, end));
    };

    renderPages = () => {
            return this.state.currentPagesList.map((item) =>
                 item === this.state.selectedPage
                      ?
                      <li key={item} className={styles.selectedState} onClick={() =>
                           this.partOfActivities(item)} > {item} </li>
                      :
                      <li key={item} onClick={() => this.partOfActivities(item)}> {item} </li>
            )
    };

    nextPage = () => {
        let {allPagesList, currentPagesList} = this.state;
        let firstItem = currentPagesList[0];
        let lastItem = currentPagesList[currentPagesList.length - 1];
        if(currentPagesList[currentPagesList.length-1] !== allPagesList[allPagesList.length-1]) {
            let updatedList = allPagesList.slice(firstItem, lastItem+1);
            this.setState({currentPagesList: updatedList});
        }
    };

    render() {
        const pagesAmount = this.state.allPagesList;
        return (
            <div className={styles.paginationContainer}>
                {
                    pagesAmount.length > 4
                         ?
                         <>
                         <ul>
                             {
                                 this.renderPages()
                             }
                         </ul>
                         <button onClick={this.nextPage}> > </button>
                         </>
                         :
                         <ul>
                             {
                                 this.renderPages()
                             }
                         </ul>

                }
            </div>
        );
    }
}

export default Pagination;