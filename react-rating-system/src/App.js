import React, { useState } from "react";
import EmptyStar from "./assets/empty-star.svg";
import FilledStar from "./assets/filled-star.svg";
import "./styles.css";

const RatingSystem = ({ starState, setStarState }) => {
  // function to set the star rating
  const setRating = (index) => {
    // the rating is always one more than the index
    const rating = index + 1;

    const emptyStars = 5 - rating;
    const emptyArray = new Array(emptyStars); // will make an array of empty stars
    emptyArray.fill("empty"); // fill the array with empty values

    // build new array with filled stars
    const newState = [];
    for (let i = 0; i < rating; i++) {
      // add a filled star to new array
      newState.unshift("filled");
    }

    setStarState(newState.concat(emptyArray)); // joins both newly created empty and filled arrays
  };

  // function to reset all stars called when a filled star is clicked
  const resetRating = () => {
    setStarState(["empty", "empty", "empty", "empty", "empty"]);
  };

  // function to handle hover effect adapted from https://scotch.io/tutorials/build-a-star-rating-component-for-react
  const hoverHandler = (ev) => {
    // grabs an HTML collection with all 5 stars
    const stars = ev.target.parentElement.getElementsByClassName("star");

    const hoverValue = ev.target.dataset.value;

    // programmatically changes style however this will not work on svgs
    Array.from(stars).forEach((star) => {
      star.style.color = hoverValue >= star.dataset.value ? "yellow" : "gray";
    });
  };
  return (
    <div>
      <h1>5 star rating system</h1>
      <h2>Select a rating:</h2>
      {starState.map((star, index) => {
        console.log(star);
        return star === "empty" ? (
          <img
            // adds a clasName to get html
            className="star"
            src={EmptyStar}
            alt="empty star"
            key={index}
            // adds data value to be accessed by event.target
            data-value={index + 1}
            onClick={() => setRating(index)}
          />
        ) : (
          <img
            src={FilledStar}
            alt="empty star"
            key={index}
            onClick={resetRating}
          />
        );
      })}
    </div>
  );
};

export default function App() {
  // state of stars
  // using a array to map over stars and assign them an index
  const [starState, setStarState] = useState([
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
  ]);

  return (
    <div className="App">
      <RatingSystem starState={starState} setStarState={setStarState} />
    </div>
  );
}
