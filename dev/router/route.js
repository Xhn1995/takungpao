import React from 'react';

import {Route,BrowserRouter as Router,Link} from 'react-router-dom';

import Index from '../component/model/index.js';

import China from '../component/model/china.js';

import China1 from '../component/model/china1.js';


export default class RouteTkp  extends React.Component{
	
	render(){
		
		return (
			
			<Router>
			 	<div>
            		<Route exact path="/" component={Index}/>
            		<Route path="/1" component={China}/>
            		<Route path="/111" component={China1}/>

        		</div>

			   

			</Router>
			
		)
		
	}

}