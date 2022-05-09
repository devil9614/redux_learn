import { useSelector } from 'react-redux';
import './App.css';
import BlogPage from './components/BlogPage';
import Login from './components/Login';
import LoginButton from './components/LoginButton';
import { Profile } from './components/Profile';
import ToggleButton from './components/ToggleButton';
const mastercommit = "making a commit in the master branch after test 1 commits"

const NewTest = () => {
  return (
    <button>Test1</button>
  )
}

function App() {
  const isAuth = useSelector((state) => state.auth.value)
  return (
    <div className="App">
      {/* <NewTest/>
      <ToggleButton/>
      <Profile/> */}
      {/* <Login/> */}
      <LoginButton/>
      {isAuth && <BlogPage />}
    </div>
  );
}

export default App;
