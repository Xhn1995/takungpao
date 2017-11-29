import React from 'react';

import {render} from 'react-dom';

import '../component/css/reset.css';

import Hd from '../component/js/head.js';

import Ft from '../component/js/foot.js';

import RouteTkp from '../router/route.js';


render(
	<div>

  		<Hd/>

  		<RouteTkp/>

  		<Ft/>

  	</div>

, document.querySelector('div'));