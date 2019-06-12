import React, {Component} from 'react';
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import {Button} from "react-bootstrap";

class FilterInput extends Component {

   // filterNames = (e) => {
   //    this.props.setVisibilityFilter(e.target.value);
   // };

   onCancel = () => {

   };

   render() {
      return (
           <div id="filterInput">
              <InputGroup className="mb-3">
                 <FormControl
                      id="inputHandle"
                      placeholder="Tap here for filtering"
                      onChange={(e) => this.props.setVisibilityFilter(e.target.value)}
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