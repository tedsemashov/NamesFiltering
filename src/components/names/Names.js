import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import FilterInput from '../input';
import SelectedNames from '../selected-names';
import ListGroup from 'react-bootstrap/ListGroup';
import './names.css';

class Names extends Component {

   componentDidMount() {
      this.props.getNamesData();
   };

   setSelectedName = (id) => {
      this.props.setSelectedName(id);
   };

   render() {
      const {filteredNames} = this.props;
      return (
           <div>
              <ListGroup>
                 <ListGroup.Item>
                    <FilterInput/>
                 </ListGroup.Item>
                 <ListGroup.Item>
                    <SelectedNames/>
                 </ListGroup.Item>
                 <ListGroup.Item>
                    {
                       filteredNames.map(({id, name,}) =>
                            <Button variant="outline-primary" size="sm" type="button" id="buttonName"
                                    key={id} onClick = {() => this.setSelectedName(id)}> {name} </Button>
                       )
                    }
                 </ListGroup.Item>
              </ListGroup>
           </div>
      );
   }
}

export default Names;