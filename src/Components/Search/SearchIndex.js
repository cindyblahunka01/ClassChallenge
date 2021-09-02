import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor(props){
    super(props)
   this.state = {
     searchString: "",
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     results: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']
   }
     this.searchFunction = this.searchFunction.bind(this);
 }

 searchFunction(value) {
   console.log(value)
  let results = this.state.things.filter(thing => thing.includes(value.toLowerCase()))
  console.log(results)
  this.setState({ results: results})
  console.log(this.state.things);
}


 render() {
  let search = this.state.searchString.trim().toLowerCase();

  if (search.length > 0) {
  }

   return (
     <div>
       <Input placeholder='Search Here' type='text' onChange={(e) => this.searchFunction(e.target.value)} />
       <h3>Results:</h3>
       {this.state.results.map((thing) => <li>{thing}</li> )}

     </div>
   );
 }
}
 
export default SearchIndex;
