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
      const {activities} = this.props;
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
      const {selectedPage} = this.state;
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
      let {allPagesList, currentPagesList, selectedPage} = this.state;
      let firstItem = currentPagesList[0];
      let lastItem = currentPagesList[currentPagesList.length - 1];

      if (currentPagesList[currentPagesList.length - 1] !== allPagesList[allPagesList.length - 1]) {
         let updatedList = allPagesList.slice(firstItem, lastItem + 1);
         this.setState({currentPagesList: updatedList, start: false});
      }

      if (currentPagesList.includes(allPagesList[allPagesList.length - 2])) {
         this.setState({end: true});
      }

      if (selectedPage !== currentPagesList[0]) {
         return false;
      } else {
         this.setState({selectedPage: currentPagesList[1]})
      }
      this.partOfActivities(currentPagesList[1]);
   };

   previousPage = () => {
      let {allPagesList, currentPagesList, selectedPage} = this.state;
      let endItem = currentPagesList[currentPagesList.length - 1];
      let startItem = currentPagesList[0];
      let updatedList = allPagesList.slice(startItem - 2, endItem - 1);
      this.setState({currentPagesList: updatedList, start: false, end: false});

      if (currentPagesList.includes(allPagesList[1])) {
         this.setState({start: true});
      }

      if (selectedPage === currentPagesList[0]) {
         this.setState({selectedPage: currentPagesList[0] - 1})
      }
      this.partOfActivities(currentPagesList[0] - 1);
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