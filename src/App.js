import './App.css';
import BlogPage from './components/BlogPage';
import Login from './components/Login';
import { Profile } from './components/Profile';
import ToggleButton from './components/ToggleButton';
const mastercommit = "making a commit in the master branch after test 1 commits"

const NewTest = () => {
  return (
    <button>Test1</button>
  )
}
const commit2 = "ne w commit"
const test2 = "3r d branch"
const commit3 = "new commit"
const test45 = "new commit in test1"

function App() {
  return (
    <div className="App">
      <NewTest/>
      <ToggleButton/>
      <Profile/>
      <Login/>
      <BlogPage/>
    </div>
  );
}

export default App;
