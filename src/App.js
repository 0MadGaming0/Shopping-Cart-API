import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProducts from './components/AddProducts';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddProducts/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
