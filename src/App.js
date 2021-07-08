import Navbar from "./components/Navbar";

import Incov from "./layout/Incov";
import News from "./layout/News";
import Vaccine from "./layout/Vaccine";
import Statistic from "./layout/Statistic";
import Latest from "./layout/Latest";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Incov}></Route>
        <Route path="/news" exact component={News}></Route>
        <Route path="/vaccine" exact component={Vaccine}></Route>
        <Route path="/statistic" exact component={Statistic}></Route>
        <Route path="/latest" exact component={Latest}></Route>
      </Switch>
    </Router>
  );
}

export default App;
