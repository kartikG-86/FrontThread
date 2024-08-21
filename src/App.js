import './App.css';
import { Routes, Route } from "react-router-dom";
import MainPage from './components/MainPage';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/threads" element={<MainPage />} />
          <Route path="/profile" element={<MainPage />} />
        </Route>
      </Routes>
  );
}

export default App;
