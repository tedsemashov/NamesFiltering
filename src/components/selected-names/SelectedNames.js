import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

class SelectedNames extends Component {
   removeSelectedName = (id) => {
      this.props.removeSelectedName(id);
   };

   render() {
      return (
           this.props.selectedNames.map(({id, name}) =>
                <Button variant="outline-primary" size="sm" type="button" id="buttonName"
                        key={id} onClick = {() => this.removeSelectedName(id)}>
                   {name}     <Badge variant="danger">X</Badge>
                </Button>
           )
      );
   }
}

export default SelectedNames;