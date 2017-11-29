import React from 'react';

import {render} from 'react-dom';

import mainNews from './mainNews.json';

export default class MainNews extends React.Component{

    
  render(){
    
    var result={mainNews}.mainNews.result;
    return(
       <div className='main'>
         {
         	result.map((value,index)=><div className={value.url ? 'big':'normal' } key={index}><a href="##">{value.title}</a><img  className={value.url ? 'show':'' } src={value.url}/><p>{value.part}</p></div>)
 		 }      
       </div>
          
    )
  }
}


