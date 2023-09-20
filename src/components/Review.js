import React from "react";
import { review } from "../Data";
import {
  BsFillChatSquareQuoteFill,
  BsStarFill,
  BsStarHalf,
} from "react-icons/bs";

const Review = () => {
  return (
    <>
      <section className="review">
        <h1 className="heading">
          Customer's <span>Reviews</span>
        </h1>
        <div className="box-container">
          {review.map((item, index) => (
            <div className="box" key={index}>
              <div className="speak-icon">
                <BsFillChatSquareQuoteFill />
              </div>

              <p>
                Lorem ipsum dolor sit amet <br /> consectetur adipisicing. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit.
                Exercitationem laborum architecto distinctio consequatur saepe
                molestiae. Rem aliquam eligendi amet voluptatum.
              </p>
              <img src={item.img} alt="" className="user" />
              <h3>Kyojuro Rengoku</h3>
              <div className="stars">
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Review;
