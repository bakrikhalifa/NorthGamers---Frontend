import "./App.css";
import Header from "./components/Header";
import LoggedIn from "./components/LoggedIn";
import WelcomeParagraph from "./components/WelcomeParagraph";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Reviews from "./components/Reviews";
import IndividualReview from "./components/IndividualReview";
import ReviewComments from "./components/ReviewComments";

function App() {
  const LoggedInUser = "weegembump";
  return (
    <div className="App">
      <Header />
      <LoggedIn LoggedInUser={LoggedInUser} />
      <Nav />
      <Routes>
        <Route
          path="/"
          element={<WelcomeParagraph LoggedInUser={LoggedInUser} />}
        />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<IndividualReview />} />
        <Route
          path="/reviews/:review_id/comments"
          element={<ReviewComments LoggedInUser={LoggedInUser} />}
        />
        <Route path="/users" />
        <Route path="/categories" />
      </Routes>
    </div>
  );
}

export default App;
