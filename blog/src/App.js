import AuthProvider from "./context/AuthProvider.js";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Header from './Page/Header.jsx';
import Footer from './Page/Footer.jsx';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header/>
        <main>
        </main>
        <Footer/>
      </AuthProvider>
    </Router>
  );
}

export default App;
