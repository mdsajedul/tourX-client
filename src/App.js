import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import PackageDetails from './Pages/PackageDetails/PackageDetails';

function App() {
  return (
    <div className="App">
        <Router>
            <Header></Header>
            <Switch>
                <Route exact path="/">
                    <Home></Home>
                </Route>
                <Route exact path="/home">
                    <Home></Home>
                </Route>
                <Route exact path="/packagedetail/:packageId">
                    <PackageDetails></PackageDetails>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
