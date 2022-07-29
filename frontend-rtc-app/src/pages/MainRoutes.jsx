import {Routes,Route} from 'react-router-dom'
import Video from "./Video";
import Home from './Home';
import Message from './Message';
import "../App.css"

const MainRoutes = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/video" element={<Video />} />
        <Route path="/msg" element={<Message />} />
      </Routes>
    </div>
  );
}

export default MainRoutes