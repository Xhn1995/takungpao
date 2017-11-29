import React from 'react';

import '../css/headandfoot.less';

import logo from '../img/logo.png';

var time=new Date().getFullYear()+'年'+(new Date().getMonth()+1)+'月'+new Date().getDate()+'日'+"  星期" + "日一二三四五六".split(/(?!\b)/)[new Date().getDay()];

console.log(time);

import Nav from './nav.js';

export default class Hd extends React.Component{
		
		render(){
		 
			return (
				 <header>
				 	<div className='wrap'>

				   		<div className='left'>
				   	
				   			<p>{time}</p>
				   			
				   			<p><a href='##'>新闻客户端</a><a href='##'>LED屏</a></p>
				   		
				   		</div>

				   		<div className='right'>

				   			<p><a href='##'>登录</a><a href='##'>注册</a><a href='##'>繁体</a></p>
						
								<input type='text' placeholder='输入搜索内容'/> 
	
								<button>搜索</button>

						</div>
					</div>

					<Nav/>



				 </header>
			)

		}
}

