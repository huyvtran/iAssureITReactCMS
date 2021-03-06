import React from 'react';
import { BrowserRouter as Router,Switch} from 'react-router-dom';
import { Route } from 'react-router';
import Masterpage from '../MasterPage/MasterPage.js';
import Headernew from '../blockTemplate/Headernew/headernew.js';
import Footer from '../blockTemplate/Footer/Footer.js';

import Homepage from './Homepage.js';
import ContactModal 	from '../blockTemplate/ContactModal/ContactModal.js';

import ScrollButton     from '../blockTemplate/ScrollButton/ScrollButton.js';
import AllBlogs     from '../blockTemplate/AllBlogs/AllBlogs.js';

import SingleBlogPage                   from '../blockTemplate/SingleBlogPage/SingleBlogPage.js';





const WebLayout = () => (

        <div>
         	<Route path= "/:pageurl"          component={ Masterpage } /> 
          <Route path= "/"                  exact component={ Homepage } /> 
          <Route path= "/blogs"             exact component={ AllBlogs } /> 
           <Route path="/singleblog/:selectedUrl" component={ SingleBlogPage }  />   
        </div>


	);


const Routes = (props) => {
  return (
    <Router>
    		
        <Headernew />
        <ContactModal />
    	<Switch>
           <Route path="/" component={ WebLayout } />
            
    	</Switch>
         <Footer /> 
         <ScrollButton/> 
    </Router>
  )
}

export default Routes;
