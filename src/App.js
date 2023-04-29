import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Nav from './components/nav';

const App = () => {
 return (
    <>
    <Nav />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Post/:id" element={<Post />} />
       </Routes>
    </>
 );
};

export default App;
