import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.css';
import chunk from 'lodash.chunk';

class Pagination extends Component {

   state = {
      activitiesList: [],
      pagesList: [],
      currentPagesGroupIndex: 0,
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
      const { pagesAmount } = this.props;
      const pagesListGeneral = [];
      for (let i = 1; i <= length; i++) {
         pagesListGeneral.push(i);
      }
      this.setState({pagesList: chunk(pagesListGeneral, pagesAmount)})
   };

   getPartOfActivities = selectedPage => {
      const { activitiesList } = this.state;
      this.setState({ selectedPage });
      this.props.onSelect(activitiesList[selectedPage - 1]);
   };

   nextPage = () => {
      const { currentPagesGroupIndex } = this.state;
      this.setState({currentPagesGroupIndex: currentPagesGroupIndex + 1});
   };

   previousPage = () => {
      const { currentPagesGroupIndex } = this.state;
      this.setState({currentPagesGroupIndex: currentPagesGroupIndex - 1});
   };

   renderPagesList = () => {
      const { pagesList, currentPagesGroupIndex, selectedPage} = this.state;
      if(pagesList.length !== 0) {
         return pagesList[currentPagesGroupIndex].map(
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
      const { activitiesList, pagesList, currentPagesGroupIndex} = this.state;
      const { pagesAmount } = this.props;
      return (
           <div className={styles.paginationContainer}>
              {
                 activitiesList.length > pagesAmount
                      ?
                      <>
                         { currentPagesGroupIndex !== 0 && <i onClick={this.previousPage}> back </i> }
                         {/*{ currentPagesGroupIndex !== 0 && <i className='icon-amplify-arrow-left' onClick={this.previousPage}/> }*/}
                         <ul>
                            {
                               this.renderPagesList()
                            }
                         </ul>
                         { currentPagesGroupIndex !== pagesList.length - 1 && <i onClick={this.nextPage}> next </i> }
                         {/*{currentPagesGroupIndex !== pagesList.length - 1 && <i className='icon-amplify-arrow-right' onClick={this.nextPage}/> }*/}
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
   pagesAmount: '4'
};

Pagination.propTypes = {
   activities: PropTypes.array,
   onSelect: PropTypes.func,
   activitiesAmount: PropTypes.string,
   pagesAmount: PropTypes.string
};

export default Pagination;