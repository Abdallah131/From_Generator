import './App.css';
import Builder from './Pages/Builder';
import Saved from './Pages/SavedForms';
import About from './Pages/About';

import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Builder />}/>
        <Route path="/form/:formid" element={<Builder />} />
        <Route path="/Saved" element={<Saved />} />
        <Route path="/About" element={<About />} />
      </Routes>
  </Router>
  );
}

export default App;
