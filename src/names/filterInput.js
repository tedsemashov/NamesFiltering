import React, {Component} from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {Button} from "react-bootstrap";

class FilterInput extends Component {
   filterNames = (e) => {
      this.props.filteredNames(e.target.value);
   };

   onCancel = () => {
      this.props.cancel('');
      document.getElementById("inputHandle").value = '';
   };

   render() {
      return (
           <div id="filterInput">
              <InputGroup className="mb-3">
                 <FormControl
                      id="inputHandle"
                      placeholder="Tap here for filtering"
                      onChange={this.filterNames}
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