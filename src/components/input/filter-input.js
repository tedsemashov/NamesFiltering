import React, {Component} from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {Button} from "react-bootstrap";

class FilterInput extends Component {

   filterNames = (value) => {
      this.props.setVisibilityFilter(value);
   };

   onCancel = () => {
      this.props.setVisibilityFilter('');
   };

   render() {
      return (
           <div id="filterInput">
              <InputGroup className="mb-3">
                 <FormControl
                      id="inputHandle"
                      placeholder="Tap here for filtering"
                      onChange={(e) => this.filterNames(e.target.value)}
                      value={this.props.inputValue}
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