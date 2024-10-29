import AuthProvider from "./context/AuthProvider.js";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './Page/Header';
import Main from './Page/Main';
import Footer from './Page/Footer';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header/>
        <Main/>
        <Footer/>
      </AuthProvider>
    </Router>
  );
}

export default App;
