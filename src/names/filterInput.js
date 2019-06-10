import React, {Component} from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {Button} from "react-bootstrap";

class FilterInput extends Component {
   state = {
     targetValue: ''
   };

   filterNames = (e) => {
      this.setState({targetValue: e.target.value});
      this.props.filteredNames(e.target.value);
   };

   onCancel = () => {
      this.props.cancel();
      this.setState({targetValue: ''})
   };

   render() {
      return (
           <div id="filterInput">
              <InputGroup className="mb-3">
                 <FormControl
                      id="inputHandle"
                      placeholder="Tap here for filtering"
                      onChange={this.filterNames}
                      value={this.state.targetValue}
                 />
                 <InputGroup.Append>
                    <Button variant="outline-danger" onClick = {this.onCancel}>X</Button>
                 </InputGroup.Append>
              </InputGroup>
           </div>
      );
   }
}

export default FilterInput;