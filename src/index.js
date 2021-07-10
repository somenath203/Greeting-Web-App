import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


let curDate = new Date();
curDate = curDate.getHours();
let greeting = '';

const styling = { };

if(curDate >= 4 && curDate < 12)
{
  greeting = 'Good Morning. We wish you a great day ahead.'
  styling.color = '#248f24'
}
else if(curDate >= 12 && curDate < 19) //19 means 7 p.m.
{
  greeting = 'Good Afternoon. We hope you are having a fantastic day.'
  styling.color = '#cc6600'
}
else
{
  greeting = 'Good Night. Sweet Dreams.'
  styling.color = '#0000e6'
}

ReactDOM.render(
  <div>
  <h1>Hello Dear, <span style={styling}>{greeting}</span></h1>
  </div>,
  document.getElementById('root')
);
 