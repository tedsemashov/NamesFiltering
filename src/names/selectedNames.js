import React, {Component} from 'react';
import {Button} from "react-bootstrap";
import Badge from "react-bootstrap/Badge";

class SelectedNames extends Component {
   returnSelectedName = (id, name, sex, e) => {
      this.props.returnSelectedName(id, name, sex, e);
   };

   render() {
      return (
           this.props.selectedNames.map(({id, name, sex}) =>
                <Button variant="outline-primary" size="sm" type="button" id="buttonName"
                        key={id} onClick = {(e) => this.returnSelectedName(id, name, sex, e)}>
                   {name}     <Badge variant="danger">X</Badge>
                </Button>
           )
      );
   }
}

export default SelectedNames;