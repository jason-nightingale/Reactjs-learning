import React from 'react';
import ReactDOM from 'react-dom';

// Write code here:
const myList = (
	<ul>
    <li>boat</li>
    <li>truck</li>
    <li>house</li>
    <li>job</li>
  </ul>
);

ReactDOM.render(myList, document.getElementById('app'));

const math = (<h1>2+3 = {2+3}</h1>);

ReactDOM.render(math, document.getElementById('app'));

const h1 = <h1>hello world</h1>;
