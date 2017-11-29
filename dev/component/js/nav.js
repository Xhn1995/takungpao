import React from 'react';

export default class Nav extends React.Component{

  constructor(){
    
    super();

    var nav=`大公报 中国 国际 香港 财经 体育 娱乐 汽车 教育 宗教 国学 电台 视频 专题`.split(/\s+/);
    
    this.state = {'nav':nav};
    
  }	

  render(){
 


    var state=this.state;

  	return (

  		<nav>        
  			<div>
	     		<ul>
            {
              state.nav.map((value,index) => <li key={index}><a href={ index ? '#/'+index : '/' }>{value}</a></li>)
            }
          </ul>
	     		
		  	</div>
		</nav>
  	
  	)

  }
}
