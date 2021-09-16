import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Register from '../Components/Register';
import Login from '../Components/Login';
import Profile from '../Components/Profile';
import Home from "../Components/Home"
import Hotels from "../Components/Hotels";
import Addhotels from "../Components/Addhotels"
import Addrecipe from "../Components/Addrecipe";
import Recipe from "../Components/Recipe";
import Admin from "../Components/Admin";
import Dashboard from "../Components/Dashboard";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const index = () => {

   return (
    <Router>
        <Switch>
          <Route path="/" exact component={Home}/>   
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
          <PublicRoute path="/dashboard" exact component={Dashboard} />
          <PrivateRoute path='/Profile' component={Profile} />
          <PrivateRoute path="/hotel" exact component={Hotels} />
          <PrivateRoute path="/hotel/add" exact component={Addhotels} />
          <PublicRoute path="/hotel/recipe" exact component={Recipe} />
          <PrivateRoute path='/recipe/add' exact component={Addrecipe} />
          <PrivateRoute path='/admin' exact component={Admin} />
        </Switch>
      </Router>
  )
}

export default index