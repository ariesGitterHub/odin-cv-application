import "./App.css";
import Header from "./components/Header"
import Editor from "./components/Editor"
import Preview from "./components/Preview"
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <div className="editor-preview-container">
          <Editor />
          <Preview />  
        </div>
        <Footer />
      </div>
    </>
  );
}

