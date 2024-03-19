// import logo from './logo.svg';
import "./index.css"
import Navbar from "./Navbar";
import Create from "./Create";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";


function App() {
  // const title = `welcome to the new Blog`;
  // const person = {name: 'John', age: 36};
  // const link = `https://google.com`;

  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* <Home /> */}
          {/* <h1>App Components</h1>
          <h2>{title}</h2>
          <p>{person.name} & {person.age}</p>
          <p>Random Number is ={">"} { Math.ceil(Math.random() * 20) }</p>

          <a href={link}>go to google website</a> */}
          <Switch>
            <Route exact path="/">
              <Home /> 
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>  
      </div>
    </Router>
  );
}

export default App;
