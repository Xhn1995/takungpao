
//浏览器打开模块
var browser = require('open-browser-webpack-plugin');

//html模板模块
var template = require('html-webpack-plugin');

module.exports = {
	
	entry:__dirname+'/dev/view/main.js',
	
	output:{
		
		path:__dirname+'/www/',
		
		filename:'index.js'
		
	},
	//模块配置
	module:{
		//加载配置
		loaders:[
		    //匹配指定的文件使用指定的模块进行处理！！！！
			{
				test:/\.less$/,
				loader:'style-loader!css-loader!less-loader'
			},
			
			{
				
				test:/\.css$/,
				
				loader:'style-loader!css-loader'
				
			},
			
			{
				
				test:/\.jsx?$/,
				
				loader:'babel-loader'
				
			},
			{
				
				test:/\.(jpg|png|gif|jpeg)$/,
				loader:'url-loader'
				
			},
			{
        		test: /\.json$/,
        		loader: 'json-loader'
      		}
			
		]
		
	},
	
	//配置要使用的插件
	plugins:[
		
		new browser({url:'http://127.0.0.1:8080/'}),
		
		new template({
			
			template:__dirname+'/dev/view/index.html',
			
			filename:'index.html'
			
		})
		
	]
	
}
