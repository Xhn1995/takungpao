import React from 'react';

import {render} from 'react-dom';

import { Carousel } from 'antd';

import xx from'../css/index.less';

export default class Banner extends React.Component{

  constructor(){
    
    super();

    var url=['http://images.takungpao.com/2017/1031/20171031013351240.jpg','http://images.takungpao.com/2017/1031/20171031080424904.jpg','http://images.takungpao.com/2017/1031/20171031080451160.jpg','http://images.takungpao.com/2017/1031/20171031102725702.jpg','http://images.takungpao.com/2017/1031/20171031080515573.jpg'];
    
    var title=['习近平和中央政治局常委集体瞻仰中共一大会址','香港科技大学成功研发全港首部无人车','香港的士正式接入支付宝','全球首款大型民用货运无人机在陕西演示飞行','平昌冬奥会迎倒计时百天'];
    
    var arr1=[];
    
    for(var i in title){
      
      var obj={};

      obj['title']=title[i];
      
      obj['url']=url[i];
        
      arr1.push(obj);

        
    }
    this.state = {img:arr1};
    
  }
    
  render(){
  	
    return(
        

        <Carousel  effect="fade" autoplay>
          {
   
           this.state.img.map((value,index)=> <div className='show' key={index}><p>{value.title}</p><img src={value.url}/></div>)
                
          }
        
       </Carousel>
          
    )
  }
}


