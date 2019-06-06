import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup';
import './names.css';

class Names extends Component {
   state = {
      names: [],
      staticNames: [],
      selectedName: '',
      prevInputValue: null,
   };

   getNames() {
      fetch('/names')
           .then((res) => res.json())
           .then(({ data } ) => {
                this.setState({names: data});
                this.setState({staticNames: data})
           })
   };

   componentDidMount() {
      this.getNames();
   };

   //Set Name in input tag and delete this {object} from list
   setName = (name) => {
      this.setState({selectedName: name});
      let names = this.state.names;
      for (let obj of names) {
         if(obj.name === name) {
            names.splice(names.indexOf(obj), 1);
         }
      }
   };

   //Filtering names according to text in input
   filterNames = (e) => {
      let self = this;
      this.setState({prevInputValue: e.target.value.length});

      let filtering = function(updatedNames) {
         updatedNames = updatedNames.filter(function (obj) {
            return obj.name.toLowerCase().search(
                 e.target.value.toLowerCase()) !== -1;
         });
         self.setState({selectedName: e.target.value});
         self.setState({names: updatedNames});
      };

      if(e.target.value.length < this.state.prevInputValue) {
         let updatedNames = this.state.staticNames;
         filtering(updatedNames);
      } else {
         let updatedNames = this.state.names;
         filtering(updatedNames);
      }
   };

   //Canceled filtering and returned App to initial state
   cancelName = () => {
      this.getNames();

      if(this.state.selectedName.name !== '') {
         this.setState({selectedName: ''});
      }
   };

   render() {
      const {names} = this.state;
      return (
           <div>
              <div id="filterInput">
                 <InputGroup className="mb-3">
                    <FormControl
                         placeholder="Tap here for filtering"
                         value={this.state.selectedName}
                         onChange={this.filterNames}
                    />
                    <InputGroup.Append>
                       <Button variant="outline-danger" onClick = {this.cancelName}>X</Button>
                    </InputGroup.Append>
                 </InputGroup>
              </div>
              {
                 names.map(({id, name}) =>
                   <Button variant="outline-primary" size="sm" type="button" id="buttonName"
                           key={id} onClick = {(e) => this.setName(name, e)}> {name} </Button>
                 )
              }
           </div>
      );
   }
}

export default Names;