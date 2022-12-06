import './App.css';
import SignIn from './SignIn';
import SignOut from './SignOut';
import Register from './Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DreamList from './DreamList';
import DreamDetail from './DreamDetail';
import Header from './Header';
import ReusableForm from './ReusableForm';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-out" element={<SignOut />} />
        <Route path="/dream-detail" element={<DreamDetail />} />
        <Route path="/dream-list" element={<DreamList />} />
        <Route path="/form" element={<ReusableForm />} />
      </Routes>
    </Router>

  );
}

export default App;
