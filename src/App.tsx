import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { Error } from './pages/Error/Error';
import PATHES from './constants/pathes';

const { MAIN, NOT_FOUND } = PATHES;

function App() {
  return (
    <Routes>
      <Route path={MAIN} element={<Main />} />
      <Route path={NOT_FOUND} element={<Error />} />
    </Routes>
  );
}

export default App;
