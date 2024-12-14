import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import Home from './screens/Home';
import AboutMe from './screens/About';
import Home from './screens/Home';
// import AboutMe from './screens/AboutMe';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Header/> */}
      <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route path={'/about'} element={<AboutMe/>} />
      </Routes>   
      </BrowserRouter>
    </div>
  );
}

export default App;
