import GlobalStyles from "./Components/GlobalStyle";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import StarterPage from "./Components/StarterPage";
import SignUpPage from "./Components/SignUpPage";
import ToDosPage from "./Components/ToDosPage";

function App() {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StarterPage/>} />
          <Route path="/SignUp" element={<SignUpPage/>} />
          <Route path="/ToDos" element={<ToDosPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// 1) მესამე გვერდის რესპონსივი გასასწორებელია,კონკრეტულად უფრო ინფუთი და ბათონი როა გვერდიგვერდ ეგ.
// 2) იმ შემთხვევაში თუ ძალიან გრძელ თუდუს დაამატებს იუზერი გასათვლელია როგორ ვაკონტროლო.
// 3) ყველა თუდუ უნდა შევინახო ლოკალსთორიჯში, და რეფრეშზე არუნდა შეიცვალოს.
// 4) უნდა მოვიფიქრო სოლუშენი როგორ არ გადავუშვა საწყის გვერდზე დალოგინებული იუზერი და პირიქით.
// 5) მესამე გვერდზე სურათს დავუმატოთ ლოგაუთის ფუნქციონალი
// 6) browserRouter hashRouter-ად გადავაკეთოთ მანამ სანამ დავბილდავ და გავუშვებს პროექტს
