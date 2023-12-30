import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import RankListPage from './pages/RankListPage';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/rank" element={<RankListPage />} />
        </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
