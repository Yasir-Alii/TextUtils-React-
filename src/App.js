
import './App.css';
import Navbar  from './Components/Navbar';
import TextForm from './Components/TextForm';
function App(){
  return(
    <>
    <Navbar title = "Text-Utils" aboutUs = "About Us"/>
    <div className='container my-3'>
    <TextForm heading = "ENTER TEXT TO VIEW"/>
    </div>
  </>
  )
  
}
export default App ;

