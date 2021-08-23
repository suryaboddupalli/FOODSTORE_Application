import Register from "./Components/Register";
import Login from "./Components/Login";
import Homepage from "./Components/Home"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Hotels from "./Components/Hotels";
import HotelRegister from "./Components/HotelRegister";
import RecipeRegister from "./Components/RecipeRegister";
import Recipe from "./Components/Recipe";




function App() {
  return (
    <div className="App"> 
    
      <Router>
        <Switch>
          <Route path="/" exact component={Homepage}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" exact component={Register}/>
          <Route path="/hotels" exact component={Hotels} />
          <Route path="/addhotel" exact component={HotelRegister} />
          <Route path="/recipe" exact component={Recipe} />
          <Route path='/addrecipe' exact component={RecipeRegister} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
