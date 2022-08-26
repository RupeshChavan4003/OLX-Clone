import './App.css';
import MainRoutes from './Pages/MainRoutes';
// import Login from './Pages/Login';
// import Signup from "./Pages/Signup"
import logo from "./logo.svg";
import Productspage from "./Pages/ProductsPage";
import HomePage from './Components/HomePage';
function App() {
  return (
    <div className="App">

      {/* <Login/> */}
      {/* <Signup/> */}
      <MainRoutes/>

      <Productspage />
      <HomePage/>

    </div>
  );
}

export default App;
