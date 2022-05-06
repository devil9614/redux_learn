import './App.css';
import Login from './components/Login';
import { Profile } from './components/Profile';
import ToggleButton from './components/ToggleButton';
function App() {
  return (
    <div className="App">
      <ToggleButton/>
      <Profile/>
      <Login/>
    </div>
  );
}

export default App;
