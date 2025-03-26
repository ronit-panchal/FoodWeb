import "./App.css";
import Footer from "./common/Footer";
import Header from "./common/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header /> 
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
