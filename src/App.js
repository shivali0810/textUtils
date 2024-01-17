import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';


function App() {
  return (
  <>
<Navbar title="TextUtils" about="About Us"/>
<div className="container">
<TextForm heading="write your text here" />
<About/>
</div>

  </>
  );
}

export default App;
