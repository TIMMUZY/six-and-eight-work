import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Main } from '../../pages';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'; 

const App = () => {
    return (
            <Router>
                <Routes>
                    <Route path='/' element={<Main />}/>
                </Routes>
            </Router>
    );
}

export default App;
