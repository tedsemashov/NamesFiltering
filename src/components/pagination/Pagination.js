import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.css';
const ITEMS_AMOUNT = 4;
const ACTIVITIES_AMOUNT = 9;

class Pagination extends Component {

   state = {
      allPagesList: [],
      currentPagesList: [],
      selectedPage: 1,
      start: true,
      end: false
   };

   componentDidMount() {
      const pagesAmount = this.creatingPagesArray();
      this.setState({allPagesList: pagesAmount});
      pagesAmount.length > ITEMS_AMOUNT
          ? this.setState({currentPagesList: pagesAmount.slice(0, ITEMS_AMOUNT)})
          : this.setState({currentPagesList: pagesAmount})
   };

   creatingPagesArray = () => {
      const { activities } = this.props;
      const pagesAmount = Math.ceil(activities.length / ACTIVITIES_AMOUNT);
      const newArr = [];
      for (let i = 1; i <= pagesAmount; i++) {
         newArr.push(i);
      }
      return newArr;
   };

   getPartOfActivities = item => {
      const { activities } = this.props;
      const end = item * ACTIVITIES_AMOUNT;
      const start = end - ACTIVITIES_AMOUNT;
      this.setState({ selectedPage: item });
      this.props.onSelect(activities.slice(start, end));
   };

   nextPage = () => {
      const { allPagesList, currentPagesList } = this.state;
      const updatedList = allPagesList.slice(currentPagesList[3]);
      const nextPagesList = updatedList.slice(0, ITEMS_AMOUNT);
      this.setState({currentPagesList: nextPagesList, start: false});

      if (nextPagesList.includes(allPagesList[allPagesList.length - 1])) {
         this.setState({end: true});
      }
   };

   previousPage = () => {
      const { allPagesList, currentPagesList } = this.state;
      const updatedList = allPagesList.slice(allPagesList[0] - 1, currentPagesList[0] - 1);
      const previousPagesList = updatedList.slice(updatedList.length - ITEMS_AMOUNT, updatedList.length);
      this.setState({currentPagesList: previousPagesList, end: false});

      if (previousPagesList.includes(allPagesList[1])) {
         this.setState({start: true});
      }
   };

   renderPagesList = () => {
      const { selectedPage, currentPagesList } = this.state;
      return currentPagesList.map(
          item => item === selectedPage
              ?
              <li key={item}
                  className={styles.selectedState}
                  onClick={() => this.getPartOfActivities(item)}> { item } </li>
              :
              <li key={item}
                  onClick={() => this.getPartOfActivities(item)}> { item } </li>
      )
   };

   render() {
      const { allPagesList, start, end } = this.state;
      return (
           <div className={styles.paginationContainer}>
              {
                 allPagesList.length > ITEMS_AMOUNT
                      ?
                      <>
                         { start ? false : <button onClick={this.previousPage}> back </button> }
                         <ul>
                            {
                               this.renderPagesList()
                            }
                         </ul>
                         { end ? false : <button onClick={this.nextPage}> next </button> }
                      </>
                      :
                      <ul>
                         {
                            this.renderPagesList()
                         }
                      </ul>

              }
           </div>
      );
   }
}

Pagination.defaultProps = {
   activities: [],
   onSelect: () => {}
};

Pagination.propTypes = {
   activities: PropTypes.array,
   onSelect: PropTypes.func
};

export default Pagination;