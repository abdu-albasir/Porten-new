import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "../pages/HomePage/HomePage";
import SecondPage from '../pages/SecondPage/SecondPage'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/SecondPage" element={<SecondPage />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
