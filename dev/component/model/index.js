import React from 'react';

import {render} from 'react-dom';


import xx from'../css/index.less';

import '../css/hot_news.less';

import '../css/imgNews.less';


import Banner from './banner.js';

import News from './news.js';

import Da19 from '../img/19da.jpg';

import Xg17 from '../img/17xg.jpg';

import Gz31 from '../img/31gz.jpg';

import Cq33 from '../img/33cq.jpg';

import St33 from '../img/33st.jpg';

import MainNews from './mainNews.js';

import Point from './point.js';

import ImgNews from './imgNews.js';

import Column from './column.js';


import {Route,BrowserRouter as Router,Link} from 'react-router-dom';


export default class Index extends React.Component{

	constructor(){
		
		super();
		
		this.state = {HotNews:[]};
		
	}
	
	render(){
		 
		var state=this.state;

		return (
			
			<div className='index'>

			   <Link to="/1">第二页</Link>
			   <Link to="/111">第二11页</Link>


				<div className='wrap'>

					<div className='left' >
					
						<Banner/>

					</div>

					<div className='right'>
       					<News/>            
					</div>
					
					<div className='img'>
					   <a href='##' ><img src={Da19}/></a>
					   
					   <a href='##' ><img src={Xg17}/></a>
					</div>
					
					<div className='hot_news'>
					
					
					<div className='hot_left' >					
						
						<MainNews/>
						
				    </div>
				    
				    <div className='hot_right'>
				    
				    	<ImgNews num={[0,4]}/>
				    	
				    </div>
				    
					<a href='##' ><img src={Gz31}/></a>
					
					
					<div className='hot_left' >
					
						<Point num={[0,4]}/>
						
				    </div>
				    
				    <div className='hot_right'>
				    
				    	<ImgNews num={[4,8]}/>
				    	
				    </div>
				    
					<a href='##' ><img src={Cq33}/></a>
					
					<div className='hot_left' >
					
						<Point num={[4,7]}/>
						
				    </div>
				    
				    <div className='hot_right'>
				    
				    	<ImgNews num={[8,11]}/>
				    	
				    </div>
					
					<a href='##' ><img src={St33}/></a>
					
					<div className='hot_left' >
					
						<Point num={[7]}/>
						
				    </div>
				    
				    <div className='hot_right'>
				    
				    	<ImgNews num={[11]}/>
				    	
				    </div>
				    
						
					</div>
					
					<div className='hot_column'>
						<Column/>
					</div>
				</div>
			  
			</div>
			
		)
		
	}
	
}
