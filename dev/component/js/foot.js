import React from 'react';

import Navfoot from './nav-foot.js';

export default class Ft extends React.Component{

  constructor(){
    
    super();

    var foot=`关于我们  网站声明  举报投诉须知  诚聘英才  友情链接  联系我们  广告服务  网站地图 京ICP备13049349号京公网安备11010102000014号`.split(/\s+/);
    
    this.state = {'foot':foot};
    
  }	

  render(){
 


    var state=this.state;

  	return (

  		<footer>        
        
        <Navfoot/>

  			<div>
	     		<p>
            {
              state.foot.map((value,index) => <a key={index} href='javascript:;'>{value}</a>)
            }
          </p>
	     		<p>Copyright 2012 - 2016 Takungpao All Rights Reserved</p>
		  	</div>
		</footer>
  	
  	)

  }
}
