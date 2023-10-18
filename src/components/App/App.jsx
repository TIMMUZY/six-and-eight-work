import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Header, Main } from "../../pages";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Header/>} >
            <Route path="/" element={<Main />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;