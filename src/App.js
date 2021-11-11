import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import PurchaseCar from './Pages/PurchaseCar/PurchaseCar/PurchaseCar';

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

                        <PrivateRoute path="/purchase/:carId">
                            <PurchaseCar />
                        </PrivateRoute>
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
