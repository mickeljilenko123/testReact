import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contacts from './Contacts';
import Products from './Products';
import Home from './Home';

const App = () => {
   return(
       <div className="page">
           <BrowserRouter>
           <Switch>
           <Route exact path="/"><Home /></Route>
               <Route path="/products"><Products /></Route>
               <Route path="/contacts"><Contacts /></Route>
           </Switch>
           </BrowserRouter>
        </div>
   )
}
export default App;