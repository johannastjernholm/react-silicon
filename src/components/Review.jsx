import Rating from "./Rating";

const Review = ({ item }) => {
  return (
    <>
      <div className="review-box">
        <img className="square-quote" src="src/assets/images/quotes.svg" alt="" />
        <Rating starRating={item.starRating} />
        <p className="review-content">{item.comment}</p>
        <div className="user-container">
          <img src={item.avatarUrl} alt="" />
          <div className="user-details">
            <p className="user-name">{item.author}</p>
            <p className="user-role">{item.jobRole}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
