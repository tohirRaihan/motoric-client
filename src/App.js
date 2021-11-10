// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import AuthProvider from './context/AuthProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
