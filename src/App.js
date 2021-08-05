import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.page";
import AboutUspage from "./pages/AboutUspage/AboutUspage.page";
import Portfolio from "./pages/Portfolio/portfolio.page";
import Project from "./pages/Project/project.page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/aboutus" exact component={AboutUspage} />
        <Route path="/portfolio" exact component={Portfolio} />
        <Route path="/portfolio/project" exact component={Project} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
