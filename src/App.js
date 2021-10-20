import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import GetService from './Pages/GetService/GetService';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import Mission from './Pages/Mission/Mission';
import About from './Pages/About/About';

function App() {
  return (
    <div className="App">
      
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/mission">
           <Mission></Mission>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/service/:serviceId">
            <GetService></GetService>
          </PrivateRoute>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
