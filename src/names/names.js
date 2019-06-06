import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup';
import './names.css';

class Names extends Component {
   state = {
      names: [],
      selectedName: '',
      selectedId: '',
      selectedSex: '',
      filteredNames: []
   };

   componentDidMount() {
      fetch('/names')
           .then((res) => res.json())
           .then(({ data } ) => this.setState({names: data}))
   }

   clickHandler = (name) => {
      this.setState({selectedName: name});
      let names = this.state.names;
      for (let obj of names) {
         if(obj.name === name) {
            names.splice(names.indexOf(obj), 1);
         }
      }
   };

   filterNames = (e) => {
      let updatedNames = this.state.names;
      updatedNames = updatedNames.filter(function (obj) {
         return obj.name.toLowerCase().search(
              e.target.value.toLowerCase()) !== -1;
      });
      this.setState({selectedName: e.target.value});
      this.setState({names: updatedNames});
   };

   cancelName = () => {
      if(this.state.selectedName.name !== '') {
         this.setState({selectedName: ''});
      }

      fetch('/names')
           .then((res) => res.json())
           .then(({ data } ) => this.setState({names: data}))
   };

   render() {
      const {names} = this.state;
      return (
           <div>
              <div id="filterInput">
                 <InputGroup className="mb-3">
                    <FormControl
                         as='input'
                         placeholder="Tap here for filtering"
                         aria-label="Tap here for filtering"
                         aria-describedby="basic-addon2"
                         value={this.state.selectedName}
                         onChange={this.filterNames}
                    />
                    <InputGroup.Append>
                       <Button variant="outline-danger" onClick = {this.cancelName}>X</Button>
                    </InputGroup.Append>
                 </InputGroup>
              </div>
              {
                 names.map(({id, name, sex}) =>
                   <Button variant="outline-primary" size="sm" type="button" id="buttonName"
                           key={id} onClick = {(e) => this.clickHandler(name, e)}> {name} </Button>
                 )
              }
           </div>
      );
   }
}

export default Names;