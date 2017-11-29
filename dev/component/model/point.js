import React from 'react';

import {render} from 'react-dom';

import point from './point.json';

export default class  Point extends React.Component{

    
  render(){
    
    var result={ point}.point.result;
    
    result=result.slice(this.props.num[0],this.props.num[1]);
    
    return(
       <div className='point'>
         {
         	result.map((value,index)=><div key={index}><a href="##">{value.title}</a><p>{value.part.map((v,i)=><a key={i} href="##">{v}</a>)}</p></div>)
 		 }      
       </div>
          
    )
  }
}


