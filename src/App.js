import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import MainPage from './components/MainPage';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigate to="/threads" />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path="/threads" element={<MainPage />} />
          <Route path="/userName/:type" element={<MainPage />} />
        </Route>
      </Routes>
  );
}

export default App;
