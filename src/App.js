import { Route, Routes } from 'react-router-dom';

import './App.css';
import Authentication from './pages/Auth';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Navigation from './pages/Navigation';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;
