import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styles from './Pagination.module.css';
import chunk from 'lodash.chunk';

class Pagination extends Component {

   constructor(props) {
      super(props);
      this.state = {
         activitiesList: chunk(props.activities, props.activitiesAmount),
         pagesList: this.creatingPagesList(props),
         pagesGroupIndex: 0,
         selectedPage: 1,
      }
   }

   componentWillReceiveProps(props) {
      this.setState({
         activitiesList: chunk(props.activities, props.activitiesAmount),
         pagesList: this.creatingPagesList(props),
         pagesGroupIndex: 0,
         selectedPage: 1,
      })
   }

   creatingPagesList = props => {
      const { pagesAmount, activities, activitiesAmount} = props;
      const activitiesLength = chunk(activities, activitiesAmount).length;
      const pagesListGeneral = [];
      for (let i = 1; i <= activitiesLength; i++) {
         pagesListGeneral.push(i);
      }
      return chunk(pagesListGeneral, pagesAmount);
   };

   getPartOfActivities = selectedPage => {
      const { activitiesList } = this.state;
      this.setState({ selectedPage });
      this.props.onSelect(activitiesList[selectedPage - 1]);
   };

   updatePagesGroupIndex = update => {
      const { pagesGroupIndex } = this.state;
      this.setState({pagesGroupIndex: pagesGroupIndex + update});
   };

   renderPagesList = () => {
      const { pagesList, pagesGroupIndex, selectedPage} = this.state;
         return pagesList[pagesGroupIndex].map(
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
      const { activitiesList, pagesList, pagesGroupIndex} = this.state;
      const { pagesAmount } = this.props;
      return (
           <div className={styles.paginationContainer}>
              {
                 activitiesList.length > pagesAmount
                      ?
                      <>
                         { pagesGroupIndex !== 0 && <i onClick={() => this.updatePagesGroupIndex(-1)}> back </i> }
                         {/*{ pagesGroupIndex !== 0 && <i className='icon-amplify-arrow-left' onClick={this.previousPage}/> }*/}
                         <ul>
                            {
                               this.renderPagesList()
                            }
                         </ul>
                         { pagesGroupIndex !== pagesList.length - 1 && <i onClick={() => this.updatePagesGroupIndex(+1)}> next </i> }
                         {/*{pagesGroupIndex !== pagesList.length - 1 && <i className='icon-amplify-arrow-right' onClick={this.nextPage}/> }*/}
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