import React, {Component} from 'react';
import styles from './Pagination.module.css';

class Pagination extends Component {

   state = {
      allPagesList: [],
      currentPagesList: [],
      selectedPage: 1,
      start: true,
      end: false
   };

   componentDidMount() {
      const pagesAmount = this.pagesAmountArray();
      this.setState({allPagesList: pagesAmount});
      if (pagesAmount.length > 4) {
         this.setState({currentPagesList: pagesAmount.slice(0, 4)})
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
      const {activities} = this.props;
      const end = item * 9;
      const start = end - 9;
      this.setState({selectedPage: item});
      this.props.onSelect(activities.slice(start, end));
   };

   renderPages = () => {
      const { selectedPage } = this.state;
      return this.state.currentPagesList.map((item) =>
           item === selectedPage
                ?
                <li key={item} className={styles.selectedState} onClick={() =>
                     this.partOfActivities(item)}> {item} </li>
                :
                <li key={item} onClick={() => this.partOfActivities(item)}> {item} </li>
      )
   };

   nextPage = () => {
      const { allPagesList, currentPagesList } = this.state;

      let updatedArray = allPagesList.slice(currentPagesList[3]);
      let nextPagesList = updatedArray.slice(0, 4);
      this.setState({currentPagesList: nextPagesList, start: false});

      if (nextPagesList.includes(allPagesList[allPagesList.length - 1])) {
         this.setState({start: false, end: true});
      }
   };

   previousPage = () => {
      let { allPagesList, currentPagesList } = this.state;

      let updatedArray = allPagesList.slice(allPagesList[0] - 1, currentPagesList[0] - 1);
      let previousPagesList = updatedArray.slice(updatedArray.length - 4, updatedArray.length);
      this.setState({currentPagesList: previousPagesList, end: false});

      if (previousPagesList.includes(allPagesList[1])) {
         this.setState({start: true});
      }
   };

   render() {
      const {allPagesList, start, end} = this.state;
      return (
           <div className={styles.paginationContainer}>
              {
                 allPagesList.length > 4
                      ?
                      <>
                         {start ? false : <button onClick={this.previousPage}> back </button>}
                         <ul>
                            {
                               this.renderPages()
                            }
                         </ul>
                         {end ? false : <button onClick={this.nextPage}> next </button>}
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