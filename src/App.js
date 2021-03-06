import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home/Home';
import PackageDetails from './Pages/PackageDetails/PackageDetails';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import MyBookings from './Pages/MyBookings/MyBookings';
import ManageAllBookings from './Pages/ManageAllBookings/ManageAllBookings';
import Footer from './Pages/Shared/Footer/Footer';
import AddNewService from './Pages/AddNewService/AddNewService';

function App() {
  return (
    <div className="App">
        <AuthProvider>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/home">
                        <Home></Home>
                    </Route>
                    <PrivateRoute exact path="/packagedetail/:packageId">
                        <PackageDetails></PackageDetails>
                    </PrivateRoute>
                    <PrivateRoute exact path="/addnewservice">
                        <AddNewService></AddNewService>
                    </PrivateRoute>
                    <PrivateRoute exact path="/mybookings">
                       <MyBookings></MyBookings>
                    </PrivateRoute>
                    <PrivateRoute exact path="/manageallbookings">
                       <ManageAllBookings></ManageAllBookings>
                    </PrivateRoute>
                    <Route exact path="/login">
                        <Login></Login>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
