import { Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./pages/home/HomePage";
import ArticleDetailPage from "./pages/articleDetail/ArticleDetailPage";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<ArticleDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
