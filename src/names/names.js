import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import FilterInput from './filterInput';
import SelectedNames from './selectedNames';
import ListGroup from 'react-bootstrap/ListGroup';
import './names.css';

class Names extends Component {
   state = {
      names: [],
      filteredNames: [],
      selectedNames: [],
      indexFilteredName: null
   };

   componentDidMount() {
      fetch('/names')
           .then((res) => res.json())
           .then(({ data } ) => {
              this.setState({names: data})
           })
   };

   setSelectedName = (id, name, sex) => {
      const [selectedNames, names, filteredNames] = [[...this.state.selectedNames], [...this.state.names],
                                                     [...this.state.filteredNames]];
      const nameIndex = names.findIndex(obj => {
         return obj.id === id;
      });
      names.splice(nameIndex, 1);
      selectedNames.splice(id, 0, {id, name, sex});
      this.setState({selectedNames, names, filteredNames});

      if(filteredNames.length !== 0) {
         const nameFilteredIndex = filteredNames.findIndex(obj => {
            return obj.id === id;
         });
         filteredNames.splice(nameFilteredIndex, 1);
         this.setState({indexFilteredName: nameFilteredIndex});
      }
   };

   returnSelectedName = (id, name, sex) => {
      const [selectedNames, names, filteredNames] = [[...this.state.selectedNames], [...this.state.names],
                                                     [...this.state.filteredNames]];
      const selectedNameIndex = selectedNames.findIndex(obj => {
         return obj.id === id;
      });
      selectedNames.splice(selectedNameIndex, 1);
      filteredNames.length === 0 ? names.splice(id, 0, {id, name, sex}) :
                                   filteredNames.splice(this.state.indexFilteredName, 0, {id, name, sex});
      this.setState({selectedNames, names, filteredNames});
   };

   filteredNames = (value) => {
      const names = [...this.state.names];
      const filteredNames = names.filter((obj) => obj.name.toLowerCase().search(value.toLowerCase()) !== -1);
      this.setState({filteredNames});
   };

   onCancel = () => {
      this.setState({filteredNames: []});
   };

   checkNames = () => {
      const [names, filteredNames] = [[...this.state.names], [...this.state.filteredNames]];
      let arrayType = [];

      debugger;

      filteredNames.length === 0 ? arrayType = names : arrayType = filteredNames;

      return arrayType.map(({id, name, sex}) =>
           <Button variant="outline-primary" size="sm" type="button" id="buttonName"
                   key={id} onClick = {(e) => this.setSelectedName(id, name, sex, e)}> {name}</Button>
      )
   };

   render() {
      return (
           <div>
              <ListGroup>
                 <ListGroup.Item>
                    <FilterInput filteredNames = {this.filteredNames}
                                 cancel = {this.onCancel}
                                 />
                 </ListGroup.Item>
                 <ListGroup.Item>
                    <SelectedNames selectedNames = {this.state.selectedNames}
                                   returnSelectedName = {this.returnSelectedName}/>
                 </ListGroup.Item>
                 <ListGroup.Item>
                    { this.checkNames() }
                 </ListGroup.Item>
              </ListGroup>
           </div>
      );
   }
}

export default Names;