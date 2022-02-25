
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './stilos/index.scss';
import Home from './paginas/Home';


function App() {
  return (
    <Router>

      <Routes>

        <Route exact path="home" element={ <Home/> } />
        <Route exact path="/" element={ <Home/> } />
        {/* <Route path="home" element={ <Home/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="home" element={ <Home/> } /> */}

      </Routes>

    </Router>
  );
}

// function Users() {
//   return (
//     <div>
//       <nav>
//         <Link to="me">My Profile</Link>
//       </nav>

//     </div>
//   );
// }


export default App;
