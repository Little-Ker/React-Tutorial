import './App.css';
import Navbar from './component/navbar/Navbar.jsx';
import ArticalView from './view/articleView/ArticalView'

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Navbar />
      </div>
      <ArticalView />
    </div>
  );
}

export default App