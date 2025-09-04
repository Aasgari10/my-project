import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage.jsx';
import AboutMe from './components/AboutMe/components/AboutMe.jsx';
import Thetictactoe from './components/tic-tac-toe/Thetictactoe.jsx';
import Invesment from './components/InvesmentProject/src/Invesment.jsx';
import CountDown from './components/countdown/src/CountDown.jsx';
function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/tic-tac-toe" element={<Thetictactoe />} />
        <Route path="/Invesment-calculator" element={<Invesment />} />
        <Route path="/count-down" element={<CountDown />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
}


export default App;