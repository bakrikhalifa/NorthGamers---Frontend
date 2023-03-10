import "./App.css";
import Header from "./components/Header";
import LoggedIn from "./components/LoggedIn";
import WelcomeParagraph from "./components/WelcomeParagraph";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Reviews from "./components/Reviews";
import IndividualReview from "./components/IndividualReview";
import ReviewComments from "./components/ReviewComments";
import Categories from "./components/Categories";
import IndividualCategory from "./components/IndividualCategory";
import Error404 from "./components/ErrorHandling";
import Users from "./components/Users";

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
        <Route path="/reviews/:review_id" element={<IndividualReview />}/>
        
        <Route
          path="/reviews/:review_id/comments"
          element={<ReviewComments LoggedInUser={LoggedInUser} />}
        />
        <Route path="/users" element={<Users/>} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:slug" element={<IndividualCategory />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default App;
