import React from 'react';

export default class Navfoot extends React.Component{

  constructor(){
    
    super();

    var nav=`大公报 资讯 中国 国际 香港 台湾 言论 财经 金融 港股 体育 娱乐 时尚 汽车 数码 健康 教育 佛教 艺术 电视 专题 往期回顾`.split(/\s+/);
    
    this.state = {'nav':nav};
    
  }	

  render(){
 


    var state=this.state;

  	return (

  		<div className="N_foot">        
  			<div className="wrap">
	     		<ul>
            {
              state.nav.map((value,index) => <li key={index}><a href='javascript:;'>{value}</a></li>)
            }
          </ul>
	     		
		  	</div>
		</div>
  	
  	)

  }
}
