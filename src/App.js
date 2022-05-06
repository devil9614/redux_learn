import './App.css';
import Login from './components/Login';
import { Profile } from './components/Profile';
import ToggleButton from './components/ToggleButton';
const mastercommit = "making a commit in the master branch after test 1 commits"
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
