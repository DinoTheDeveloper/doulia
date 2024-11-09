import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col items-center w-full bg-white">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/admin" element={<div>Admin Page</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;