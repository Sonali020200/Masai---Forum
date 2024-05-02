import logo from './logo.svg';
import './App.css';
import { Admin } from './Pages/Admin';
import { Login } from './Pages/Login';
import { MainRoutes } from './Pages/MainRoutes';
import { HomePage } from './Pages/HomePage';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <MainRoutes/>
      
    </div>
  );
}

export default App;
