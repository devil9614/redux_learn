import './App.css';
import Login from './components/Login';
import { Profile } from './components/Profile';
import ToggleButton from './components/ToggleButton';

const NewTest = () => {
  return (
    <button>Test1</button>
  )
}

function App() {
  return (
    <div className="App">
      <NewTest/>
      <ToggleButton/>
      <Profile/>
      <Login/>
    </div>
  );
}

export default App;
