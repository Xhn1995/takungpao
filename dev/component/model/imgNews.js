import React from 'react';

import {render} from 'react-dom';

import imgnews from './imgnews.json';

export default class Imgnews extends React.Component{

  render(){
    
    var result={imgnews}.imgnews.result;
    result=result.slice(this.props.num[0],this.props.num[1]);
    return(
       <div className='imgN'>
         {
         	result.map((value,index)=><div key={index}><a href="##">{value.title}</a><img src={value.url}/><p>{value.part}</p></div>)
 	     }      
       </div>
          
    )
  }
}


