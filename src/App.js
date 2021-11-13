import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import PurchaseCar from './Pages/PurchaseCar/PurchaseCar/PurchaseCar';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Register from './Pages/Register/Register';
import Error from './Pages/Error/Error';
import ExploreCars from './Pages/ExploreCars/ExploreCars/ExploreCars';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>

                        <Route exact path="/home">
                            <Home />
                        </Route>

                        <Route exact path="/login">
                            <Login />
                        </Route>

                        <Route exact path="/register">
                            <Register />
                        </Route>

                        <Route path="/explore-cars">
                            <ExploreCars />
                        </Route>

                        <PrivateRoute path="/dashboard">
                            <Dashboard />
                        </PrivateRoute>

                        <PrivateRoute path="/purchase/:carId">
                            <PurchaseCar />
                        </PrivateRoute>

                        <Route path="*">
                            <Error />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
