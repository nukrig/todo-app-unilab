import { HashRouter , Routes, Route, Navigate } from "react-router-dom";
import GlobalStyles from "./Components/GlobalStyle";
import StarterPage from "./Components/StarterPage";
import SignUpPage from "./Components/SignUpPage";
import ToDosPage from "./Components/ToDosPage";


function App() {
  return (
    <>
      <GlobalStyles />
      <Routes basename="/todo-app-unilab/">
        <Route path="/" element= {<StarterPage/>} />
        <Route path="/SignUp" element= {<SignUpPage/>} />
        <Route path="/ToDos" element= {<ToDosPage/>} />
      </Routes>
    </>
  );
}

export default function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}
