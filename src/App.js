import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (
  <>
<Navbar title="hehe" about="About Us"/>
<div className="container">
<TextForm heading="write your text here" />
</div>

  </>
  );
}

export default App;
