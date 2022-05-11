import { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import ErrorBoundary from "./feature/ErrorBoundary";
// import BlogPage from './components/BlogPage';
// import LoginButton from './components/LoginButton';
const BlogPage = lazy(() => import("./components/BlogPage"));
const LoginButton = lazy(() => import("./components/LoginButton"));
// const mastercommit = "making a commit in the master branch after test 1 commits"

// const NewTest = () => {
//   return (
//     <button>Test1</button>
//   )
// }

function App() {
  const isAuth = useSelector((state) => state.auth.value);
  return (
    <ErrorBoundary>
      <div className="App">
      <Suspense fallback = {<h3>Loading...</h3>}>
        <ErrorBoundary><LoginButton /></ErrorBoundary>
        {isAuth && <BlogPage />}
      </Suspense>
    </div>
    </ErrorBoundary>
    
  );
}

export default App;
