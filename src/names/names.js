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
      selectedSex: ''
   };

   componentDidMount() {
      fetch('/names')
           .then((res) => res.json())
           .then(({ data } ) => this.setState({names: data}))
   }

   clickHandler = (name, id, sex) => {
      this.setState({selectedName: name});
      this.setState({selectedId: id});
      this.setState({selectedSex: sex});
      let names = this.state.names;
      for (let obj of names) {
         if(obj.name === name) {
            names.splice(names.indexOf(obj), 1);
         }
      }
      debugger;
   };

   filterNames = (e) => {
      debugger;
   };

   cancelName = () => {
      let newName = {
         id: this.state.selectedId,
         name: this.state.selectedName,
         sex: this.state.selectedSex
      };
      let names = this.state.names;
      names.unshift(newName);
      this.setState({selectedName: ''});
      this.setState({selectedId: ''});
      this.setState({selectedSex: ''});
   };

   render() {
      const {names} = this.state;
      return (
           <div>
              <div id="filterInput">
                 <InputGroup className="mb-3">
                    <FormControl
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
              {names.map(({id, name, sex}) =>
                   <Button variant="outline-primary" size="sm" type="button" id="buttonName"
                           key={id} onClick = {(e) => this.clickHandler(name, id, sex, e)}> {name} </Button>
              )
              }
           </div>
      );
   }
}

export default Names;