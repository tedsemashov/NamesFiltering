import React, {Component} from 'react';
import './names.css';
import Pagination from "../pagination/";

class Names extends Component {

   componentDidMount() {
   };

   partOfActivities = (arr) => {
      console.log(arr)
   };

   render() {
      return (
           <div>
              <Pagination activities = {[{id:'1', name:'something'},{id:'2', name:'something'},{id:'3', name:'something'},
                 {id:'4', name:'something'},{id:'5', name:'something'},{id:'6', name:'something'},{id:'7', name:'something'},
                 {id:'8', name:'something'},{id:'9', name:'something'},{id:'10', name:'something'},{id:'11', name:'something'},
                 {id:'12', name:'something'},{id:'13', name:'something'},{id:'14', name:'something'},{id:'15', name:'something'},
                 {id:'16', name:'something'},{id:'17', name:'something'},{id:'18', name:'something'},{id:'19', name:'something'},
                 {id:'20', name:'something'},{id:'21', name:'something'},{id:'22', name:'something'},{id:'23', name:'something'},
                 {id:'24', name:'something'},{id:'25', name:'something'},{id:'26', name:'something'},{id:'27', name:'something'},
                 {id:'28', name:'something'},{id:'29', name:'something'},{id:'30', name:'something'},{id:'31', name:'something'},
                 {id:'32', name:'something'},{id:'33', name:'something'},{id:'34', name:'something'},{id:'35', name:'something'},
                 {id:'36', name:'something'},{id:'37', name:'something'}]}
                          onSelect = {(arr) => this.partOfActivities(arr)}
              />
           </div>
      );
   }
}

export default Names;