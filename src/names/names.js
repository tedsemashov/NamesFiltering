import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import './names.css';

class Names extends Component {
   state = {
      names: []
   };

   componentDidMount() {
      fetch('/names')
           .then((res) => res.json())
           .then(({ data } ) => this.setState({names: data}))
   }

   clickHandler = (name) => {
     alert(name)
   };

   render() {
      const {names} = this.state;
      return (
           <div>
              {names.map(({id, name}) =>
                   <Button variant="outline-primary" size="sm" type="button"
                           key={id} onClick = {(e) => this.clickHandler(name, e)}> {name} </Button>
              )
              }
           </div>
      );
   }
}

export default Names;