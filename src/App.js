import {Route, Switch} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import QuizSelect from './components/QuizSelect'
import RandomQuiz from './components/RandomQuiz'
import ToggleSwitch from '../src/components/RandomQuiz';
import Login from "../src/components/framework/Login";
import Signup from "../src/components/framework/Signup";

function App() {
  return (
    <Router>
      
          <Switch>
          <Route path="/" component={QuizSelect} exact />
          <Route path="/r/:topic" component={RandomQuiz} exact />
          <Route path="/auth/login/" exact component={Login} />
          <Route path="/auth/create/" exact component={Signup} />
          <ToggleSwitch/>
           
          </Switch>
        
    </Router>
  );
}

export default App;




