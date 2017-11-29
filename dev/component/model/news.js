import React from 'react';

import {render} from 'react-dom';

export default class News extends React.Component{

  constructor(){
    
    super();
    
    var arr=`赵克志出任公安部党委书记  公安部党委(扩大)会议10月31日召开，学习贯彻十九届中央政治局会议精神和习近平总书记在中央政治局第一次集体学习时的重要讲... 商务部驳斥美国继续歪曲中国市场经济地位  针对美国依然将中国视为“非市场经济国家”并继续对华使用“替... 反对派“滥探”黄罗周等,涉嫌影响监狱运作 保安局最新回覆立法会议员指出，频密程度及探访时数显著增加，... 吴文远“臭鱼治”袭击梁振英被判囚三周
有法律界人士认为，吴文远在案中旨在进行“政治表演”，借用食... 纽约曼哈顿发生卡车撞人恐袭已致8人死亡  纽约市长在新闻发布会上表示，当地时间10月31日下午，纽约曼哈...`.split(/\s+/);
   
    this.state = {news:arr};
    
  }
    
  render(){
  	
    return(
       <div>
       		{
	      		this.state.news.map((value,index)=>{
     				if(index%2==0){       				
     					return <a key={index} href='##' >{value}</a>
       				}else{
       				
        				return <p key={index}>{value}</p>
       				}
        		})
          	}
       </div>
          
    )
  }
}


