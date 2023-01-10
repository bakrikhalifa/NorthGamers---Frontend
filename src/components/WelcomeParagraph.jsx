import React from "react";
import '../App.css';

const WelcomeParagraph = ({ LoggedInUser: username }) => {
    return (
        <div className="allParagraphs">
          <div className="paragraph">
            <p>Hello {username} and welcome to Northcoders Games! Northcoders Games
          is a social games content rating, and discussion website.</p>
          </div>
          <div className="paragraph">
            <p>Use the tabs at the top to navigate to the home page, browse game reviews, view a list of
          users or view all game categories. The
          reviews tab contains a list of game reviews that have been submitted
          by users, which can be sorted and filtered by various criteria. The users tab
          allows you to view a list of registered users and their profiles and the categories tab allows you to view all available game categories whilst giving you the option to add your own category. Have
          fun exploring the site!</p>
          </div>
        </div>
      );
};

export default WelcomeParagraph;
