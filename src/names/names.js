import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import FilterInput from './filterInput';
import ListGroup from 'react-bootstrap/ListGroup';
import Badge from 'react-bootstrap/Badge'
import './names.css';

class Names extends Component {
   state = {
      names: [],
      filteredNames: [],
      selectedNames: [],
      targetValue: ''
   };

   componentDidMount() {
      fetch('/names')
           .then((res) => res.json())
           .then(({ data } ) => {
              this.setState({names: data})
           })
   };

   setSelectedName = (id, name, sex) => {
      const [selectedNames, names] = [[...this.state.selectedNames], [...this.state.names]];
      const nameIndex = names.findIndex(obj => {
         return obj.id === id;
      });
      names.splice(nameIndex, 1);
      selectedNames.splice(id, 0, {id, name, sex});
      this.setState({selectedNames, names});
   };

   returnSelectedName = (id, name, sex) => {
      const [selectedNames, names] = [[...this.state.selectedNames], [...this.state.names]];
      const selectedNameIndex = selectedNames.findIndex(obj => {
         return obj.id === id;
      });
      selectedNames.splice(selectedNameIndex, 1);
      names.splice(id, 0, {id, name, sex});
      this.setState({selectedNames, names});
   };

   filteredNames = (value) => {
      const names = [...this.state.names];
      const filteredNames = names.filter((obj) => obj.name.toLowerCase().search(value.toLowerCase()) !== -1);
      this.setState({filteredNames, targetValue: value});
   };

   onCancel = (value) => {
     this.setState({targetValue: value});
     debugger;
   };

   checkNamesArray = (inputValue) => {
      // TODO need to refactor
      if(inputValue === '') {
         return this.state.names.map(({id, name, sex}) =>
              <Button variant="outline-primary" size="sm" type="button" id="buttonName"
                      key={id} onClick = {(e) => this.setSelectedName(id, name, sex, e)}> {name}</Button>
         )
      }
      return this.state.filteredNames.map(({id, name, sex}) =>
           <Button variant="outline-primary" size="sm" type="button" id="buttonName"
                   key={id} onClick = {(e) => this.setSelectedName(id, name, sex, e)}> {name}</Button>
      )
   };

   render() {
      const {selectedNames} = this.state;
      return (
           <div>
              <ListGroup>
                 <ListGroup.Item>
                    <FilterInput filteredNames = {this.filteredNames} cancel = {this.onCancel}/>
                 </ListGroup.Item>
                 <ListGroup.Item>
                    {
                       selectedNames.map(({id, name, sex}) =>
                            <Button variant="outline-primary" size="sm" type="button" id="buttonName"
                                    key={id} onClick = {(e) => this.returnSelectedName(id, name, sex, e)}> {name}     <Badge variant="primary">X</Badge> </Button>
                       )
                    }
                 </ListGroup.Item>
                 <ListGroup.Item>
                    {
                       this.checkNamesArray(this.state.targetValue)
                    }
                 </ListGroup.Item>
              </ListGroup>
           </div>
      );
   }
}

export default Names;