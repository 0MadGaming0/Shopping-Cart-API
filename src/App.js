import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddProducts from './components/AddProducts';
import SearchProducts from './components/SearchProducts';
import ViewAllProducts from './components/ViewAllProducts';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddProducts/>}/>
      <Route path="/search" element={<SearchProducts/>}/>
      <Route path="/view" element={<ViewAllProducts/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
