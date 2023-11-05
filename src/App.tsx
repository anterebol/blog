import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Main } from './pages/Main/Main';
import { Error } from './pages/Error/Error';
import {
  NOT_FOUND,
  LOGIN,
  MAIN,
  SLASH,
} from './constants/pathes/common-pathes';
import { ADMIN, EDITOR, PREVIEW } from './constants/pathes/admin-pathes';
import {
  PORTFOLIO,
  TRAVEL_BLOG,
  LIVE_TOPICS,
} from './constants/pathes/user-pathes';
import { createDynamicPath } from './utils/createDynamicPath';
import { Admin } from './pages/Admin/Admin';

function App() {
  return (
    <Routes>
      <Route path={SLASH} element={<Navigate to={MAIN} />} />
      <Route path={MAIN} element={<Main />} />
      <Route path={LOGIN} element={LOGIN} />
      <Route path={ADMIN} element={<Admin />} />
      <Route path={EDITOR} element={EDITOR} />
      <Route path={PREVIEW} element={PREVIEW} />
      <Route path={PORTFOLIO} element={PORTFOLIO} />
      <Route path={LIVE_TOPICS} element={LIVE_TOPICS} />
      <Route path={createDynamicPath(LIVE_TOPICS)} element={LIVE_TOPICS} />
      <Route path={TRAVEL_BLOG} element={TRAVEL_BLOG} />
      <Route path={createDynamicPath(TRAVEL_BLOG)} element={TRAVEL_BLOG} />
      <Route path={NOT_FOUND} element={<Error />} />
    </Routes>
  );
}

export default App;
