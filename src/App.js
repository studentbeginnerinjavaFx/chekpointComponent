import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';
import './style.css';
function App() {
  return (
    <div className="App">
        <span className='Picture'><ProfilePhoto /></span>  
        <span className='title'>My Name is: <FullName /></span>
        <span className='title'>My Adresse is : <Address /></span> 
    </div>
  );
}

export default App;
