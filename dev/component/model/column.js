import React from 'react';

import {render} from 'react-dom';

import column from './column.json';

export default class Column extends React.Component{
    
  render(){
    
    var result={column}.column.result;
    return(
       <div>
         {
         	result.map((value,index)=><div key={index}><a href="##">[{value.title}]</a><img src={value.url}/><ul>{value.part.map((v,i)=><li key={i}>{v}</li>)}</ul></div>)
 				 }      
       </div>
          
    )
  }
}


