import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
 const [personsState, setPersonsState ] = useState({  persons: [
    {name: 'Endre', age:28},
    {name: 'Nora', age:32},
    {name: 'Yildan', age:47}
  ]
});

const switchNameHandler = () => {
  // console.log('Was clicked');
  setPersonState( {
    persons: [
      {name: 'max', age: 28},
      {name: 'Nora', age:32},
      {name: 'Yildan', age:50}
    ]
  });
};

return (
      <div className="App">
        <h1>Hi, i'm a React App</h1>
<p>this is really working</p>
<button onClick={switchNameHandler}>Switch Name</button>
<Person name={personsState.persons[0].name} age={personsState.persons[0].age}/> 
<Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
<Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>  
      </div>
   );
    // return React.createElement('div', "h1", 'Hi, I\'m a React App!!!');
}
export default app;

state = {
  persons: [
    {name: 'Endre', age:28},
    {name: 'Nora', age:32},
    {name: 'Yildan', age:47}
  ]
}

switchNameHandler = () => {
  // console.log('Was clicked');
  this.setState( {
    persons: [
      {name: 'max', age: 28},
      {name: 'Nora', age:32},
      {name: 'Yildan', age:50}
    ]
  })
}
