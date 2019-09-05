import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.css';
import chunk from 'lodash.chunk';

class Pagination extends Component {

   state = {
      activitiesList: [],
      pagesList: [],
      currentPagesGroup: 0,
      selectedPage: 1,
   };

   componentDidMount() {
      const { activities, activitiesAmount } = this.props;
      const activitiesList = chunk(activities, activitiesAmount);
      this.setState({ activitiesList });
      this.creatingPagesList(activitiesList.length);
   };

   componentDidUpdate() {
      this.renderPagesList();
   };

   creatingPagesList = length => {
      const { itemsAmount } = this.props;
      const pagesAmount = Math.ceil(length);
      const newArr = [];
      for (let i = 1; i <= pagesAmount; i++) {
         newArr.push(i);
      }
      this.setState({pagesList: chunk(newArr, itemsAmount)})
   };

   getPartOfActivities = selectedPage => {
      const { activitiesList } = this.state;
      this.setState({ selectedPage });
      this.props.onSelect(activitiesList[selectedPage - 1]);
   };

   nextPage = () => {
      const { currentPagesGroup, pagesList } = this.state;
      this.setState({currentPagesGroup: currentPagesGroup + 1, start: false});

      if (currentPagesGroup === pagesList.length - 2) {
         this.setState({end: true});
      }
   };

   previousPage = () => {
      const { currentPagesGroup, pagesList } = this.state;
      this.setState({currentPagesGroup: currentPagesGroup - 1, end: false});

      if (pagesList[currentPagesGroup - 1] === pagesList[0]) {
         this.setState({start: true});
      }
   };

   renderPagesList = () => {
      const { pagesList, currentPagesGroup, selectedPage} = this.state;
      if(pagesList.length !== 0) {

         return pagesList[currentPagesGroup].map(
             item => item === selectedPage
                 ?
                 <li key={item}
                     className={styles.selectedState}
                     onClick={() => this.getPartOfActivities(item)}> { item } </li>
                 :
                 <li key={item}
                     onClick={() => this.getPartOfActivities(item)}> { item } </li>
         )

      }
   };

   render() {
      const { activitiesList, pagesList, currentPagesGroup} = this.state;
      const { itemsAmount } = this.props;
      return (
           <div className={styles.paginationContainer}>
              {
                 activitiesList.length > itemsAmount
                      ?
                      <>
                         { currentPagesGroup !== 0 && <i onClick={this.previousPage}> back </i> }
                         {/*{ currentPagesGroup !== 0 && <i className='icon-amplify-arrow-left' onClick={this.previousPage}/> }*/}
                         <ul>
                            {
                               this.renderPagesList()
                            }
                         </ul>
                         { currentPagesGroup !== pagesList.length - 1 && <i onClick={this.nextPage}> next </i> }
                         {/*{currentPagesGroup !== pagesList.length - 1 && <i className='icon-amplify-arrow-right' onClick={this.nextPage}/> }*/}
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
   onSelect: () => {},
   activitiesAmount: '9',
   itemsAmount: '4'
};

Pagination.propTypes = {
   activities: PropTypes.array,
   onSelect: PropTypes.func,
   activitiesAmount: PropTypes.string,
   itemsAmount: PropTypes.string
};

export default Pagination;