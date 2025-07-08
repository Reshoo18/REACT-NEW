import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForms'

function App() {
  return (
    <>
  <Navbar title="TextUtils"/>
  <div className="container my-3 ">
    <TextForm heading ="Enter The Text To Analyze"/>
  </div>
  
    </>
  );
}
    
export default App;
