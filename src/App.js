import logo from "./logo.svg";
import "./App.css";
import { SkeletonComponent } from "./components/skeleton/Skeleton";
import { SkeletonArticle } from "./components/skeleton/SkeletonArticle";
import { Articles } from "./components/Articles";
import { UserProfile } from "./components/UserProfile";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Blogs</h1>
      </header>
      <main>
        <div className="main-content">
          <Articles/>
          <UserProfile/>
        </div>
      </main>
    </div>
  );
}

export default App;
